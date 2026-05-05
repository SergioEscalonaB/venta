from __future__ import annotations

import argparse
import subprocess
from pathlib import Path


VIDEO_EXTS = {".mov", ".mp4", ".m4v", ".avi", ".mkv", ".webm"}


def iter_videos(input_dir: Path) -> list[Path]:
    return sorted(
        [p for p in input_dir.iterdir() if p.is_file() and p.suffix.lower() in VIDEO_EXTS],
        key=lambda p: p.name.lower(),
    )


def run_ffmpeg(src: Path, dst: Path, crf: str, preset: str) -> None:
    cmd = [
        "ffmpeg",
        "-y",
        "-i",
        str(src),
        "-c:v",
        "libx264",
        "-preset",
        preset,
        "-crf",
        crf,
        "-c:a",
        "aac",
        "-b:a",
        "128k",
        "-movflags",
        "+faststart",
        str(dst),
    ]
    try:
        subprocess.run(cmd, check=True)
    except FileNotFoundError:
        raise RuntimeError(
            "No encontré `ffmpeg`. Instálalo y asegúrate de que `ffmpeg -version` funcione en la terminal."
        )


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Convierte videos a MP4 (H.264) manteniendo el nombre. Requiere ffmpeg en PATH."
    )
    parser.add_argument("--in", dest="input_dir", default="scripts/videos", help="Carpeta de entrada")
    parser.add_argument("--out", dest="output_dir", default="public/galeria", help="Carpeta de salida")
    parser.add_argument("--crf", default="23", help="CRF (calidad, menor = mejor)")
    parser.add_argument("--preset", default="medium", help="Preset x264 (ultrafast..veryslow)")
    args = parser.parse_args()

    input_dir = Path(args.input_dir).resolve()
    output_dir = Path(args.output_dir).resolve()
    output_dir.mkdir(parents=True, exist_ok=True)
    if not input_dir.exists():
        print(f"No existe la carpeta de entrada: {input_dir}")
        return 1

    sources = iter_videos(input_dir)
    if not sources:
        print(f"No encontré videos en: {input_dir}")
        return 0

    converted = 0
    skipped = 0
    failed = 0

    for src in sources:
        dst = output_dir / f"{src.stem}.mp4"
        if dst.exists():
            skipped += 1
            continue

        try:
            print(f"\nConvirtiendo: {src.name} -> {dst.relative_to(Path.cwd())}\n")
            run_ffmpeg(src, dst, crf=args.crf, preset=args.preset)
            converted += 1
        except Exception as e:
            failed += 1
            print(f"FAIL {src.name}: {e}")

    print(f"\nListo. convertidos={converted}  omitidos={skipped}  fallidos={failed}")
    print(f"Salida: {output_dir}")
    print("Requiere ffmpeg instalado en PATH.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

