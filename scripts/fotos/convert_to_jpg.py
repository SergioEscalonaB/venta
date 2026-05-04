from __future__ import annotations

import argparse
from pathlib import Path

from PIL import Image, ImageOps
import pillow_heif


IMAGE_EXTS = {
    ".jpg",
    ".jpeg",
    ".png",
    ".webp",
    ".gif",
    ".avif",
    ".tif",
    ".tiff",
    ".bmp",
    ".heic",
    ".heif",
}

pillow_heif.register_heif_opener()


def iter_images(input_dir: Path) -> list[Path]:
    return sorted(
        [
            p
            for p in input_dir.iterdir()
            if p.is_file() and p.suffix.lower() in IMAGE_EXTS
        ],
        key=lambda p: p.name.lower(),
    )


def main() -> int:
    parser = argparse.ArgumentParser(description="Convierte imágenes a JPG manteniendo el nombre.")
    parser.add_argument("--in", dest="input_dir", default="scripts/fotos", help="Carpeta de entrada")
    parser.add_argument("--out", dest="output_dir", default="public/galeria", help="Carpeta de salida")
    parser.add_argument("--quality", type=int, default=82, help="Calidad JPG (1-95)")
    args = parser.parse_args()

    input_dir = Path(args.input_dir).resolve()
    output_dir = Path(args.output_dir).resolve()
    output_dir.mkdir(parents=True, exist_ok=True)
    if not input_dir.exists():
        print(f"No existe la carpeta de entrada: {input_dir}")
        return 1

    converted = 0
    skipped = 0
    failed = 0

    sources = iter_images(input_dir)
    if not sources:
        print(f"No encontré imágenes en: {input_dir}")
        return 0

    for src in sources:
        dst = output_dir / f"{src.stem}.jpg"
        if dst.exists():
            skipped += 1
            continue

        try:
            with Image.open(src) as im:
                im = ImageOps.exif_transpose(im)
                if im.mode not in ("RGB", "L"):
                    im = im.convert("RGB")
                im.save(dst, format="JPEG", quality=args.quality, optimize=True)
            converted += 1
            print(f"OK  {src.name} -> {dst.relative_to(Path.cwd())}")
        except Exception as e:
            failed += 1
            print(f"FAIL {src.name}: {e}")

    print(f"\nListo. convertidos={converted}  omitidos={skipped}  fallidos={failed}")
    print(f"Salida: {output_dir}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

