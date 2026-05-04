# Venta Finca (Vite + React)

## Requisitos

- Node.js + npm
- Python (en Windows se ejecuta como `py`)
- FFmpeg (para convertir videos a MP4)

## Instalar y ejecutar

```bash
npm install
npm run dev
```

## Galería (fotos y videos)

### Dónde van los archivos

- **Fotos originales**: `public/galeria/`
  - Ej: `public/galeria/IMG_7343.HEIC`, `public/galeria/1.jpg`, etc.
- **Videos originales**: `scripts/videos/`
  - Ej: `scripts/videos/IMG_7342.MOV`

### Formatos soportados en la web

- **Fotos**: `.jpg`
- **Videos**: `.mp4`

> Nota: `.HEIC` y `.MOV` normalmente no se ven bien directamente en el navegador. Por eso se convierten.

### Convertir fotos a JPG (incluye HEIC → JPG)

1) Instala dependencias Python:

```bash
py -m pip install -r scripts/requirements.txt
```

2) Convierte (salida por defecto: `public/galeria/_jpg/`):

```bash
npm run media:fotos
```

Opcionalmente, puedes pasar rutas:

```bash
py scripts/fotos/convert_to_jpg.py --in public/galeria --out public/galeria/_jpg --quality 82
```

### Convertir videos MOV a MP4

#### Instalar FFmpeg en Windows (winget)

```powershell
winget install --id Gyan.FFmpeg -e
```

Luego cierra y abre la terminal y valida:

```powershell
ffmpeg -version
```

#### Convertir (salida por defecto: `scripts/videos/_mp4/`)

```bash
npm run media:videos
```

Opcionalmente, con parámetros:

```bash
py scripts/videos/convert_to_mp4.py --in scripts/videos --out scripts/videos/_mp4 --crf 23 --preset medium
```

## Scripts útiles

- `npm run media:fotos`: convierte imágenes a JPG (incluye HEIC/HEIF)
- `npm run media:videos`: convierte videos a MP4 (requiere FFmpeg)

