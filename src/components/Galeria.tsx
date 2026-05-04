import React from "react";

type GalleryItem = {
  src: string;
  alt: string;
  type: "image" | "video";
  posterSrc?: string;
};

async function exists(url: string) {
  try {
    const res = await fetch(url, { method: "HEAD", cache: "no-cache" });
    if (!res.ok) return false;

    // En dev, algunos servidores pueden responder 200 con HTML (fallback SPA).
    // Para assets reales esperamos un content-type de imagen o video.
    const ct = (res.headers.get("content-type") ?? "").toLowerCase();
    if (ct.includes("text/html")) return false;

    return ct.startsWith("image/") || ct.startsWith("video/");
  } catch {
    return false;
  }
}

export default function Galeria() {
  // Solo soportamos JPG (fotos) y MP4 (videos).
  // Hay que cambiar el nombre y colocar 1.jpg, 2.jpg, 3.jpg, etc.
  const maxIndexToScan = 80;

  const [items, setItems] = React.useState<GalleryItem[]>([]);
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    let cancelled = false;
    (async () => {
      const found: GalleryItem[] = [];

      for (let i = 1; i <= maxIndexToScan; i++) {
        const jpg = `/galeria/${i}.jpg`;
        const mp4 = `/galeria/${i}.mp4`;

        // Preferimos JPG si existe; si no, MP4.
        // (Si quieres lo contrario, lo invertimos.)
        // eslint-disable-next-line no-await-in-loop
        if (await exists(jpg)) {
          found.push({ src: jpg, alt: `Foto ${i} de la finca`, type: "image" });
          continue;
        }
        // eslint-disable-next-line no-await-in-loop
        if (await exists(mp4)) {
          found.push({ src: mp4, alt: `Video ${i} de la finca`, type: "video" });
        }
      }

      if (!cancelled) setItems(found);
    })();

    return () => {
      cancelled = true;
    };
  }, [maxIndexToScan]);

  const previewCount = 5;
  const previewItems = items.slice(0, previewCount);

  const openAt = (index: number) => {
    setActiveIndex(index);
    setIsOpen(true);
  };
  const close = () => setIsOpen(false);

  const prev = () =>
    setActiveIndex((i) => (i - 1 + items.length) % items.length);
  const next = () => setActiveIndex((i) => (i + 1) % items.length);

  React.useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, items.length]);

  const active = items[activeIndex];

  return (
    <section id="fotos" className="container my-5">
      <h2 className="text-center mb-4">Galería</h2>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3">
        {previewItems.map((it, idx) => (
          <div className="col" key={it.src}>
            <button
              type="button"
              className="p-0 border-0 bg-transparent w-100"
              onClick={() => openAt(idx)}
              aria-label={`Abrir ${it.alt}`}
              style={{ cursor: "pointer" }}
            >
              <div
                className="rounded overflow-hidden"
                style={{ aspectRatio: "4 / 3" }}
              >
                {it.type === "video" ? (
                  <video
                    className="w-100 h-100"
                    preload="metadata"
                    muted
                    playsInline
                    poster={it.posterSrc}
                    style={{ objectFit: "cover", display: "block" }}
                  >
                    <source src={it.src} />
                  </video>
                ) : (
                  <img
                    src={it.src}
                    alt={it.alt}
                    className="w-100 h-100"
                    loading="lazy"
                    style={{ objectFit: "cover", display: "block" }}
                  />
                )}
              </div>
            </button>
          </div>
        ))}

        {items.length > previewCount && (
          <div className="col">
            <button
              type="button"
              className="w-100 border-0 p-0"
              onClick={() => openAt(previewCount)}
              aria-label="Ver más fotos"
              style={{
                cursor: "pointer",
                borderRadius: 12,
                overflow: "hidden",
                aspectRatio: "4 / 3",
                position: "relative",
                background: "rgba(0,0,0,0.25)",
              }}
            >
              {items[previewCount]?.type === "video" ? (
                <video
                  className="w-100 h-100"
                  preload="metadata"
                  muted
                  playsInline
                  poster={items[previewCount]?.posterSrc}
                  style={{
                    objectFit: "cover",
                    display: "block",
                    filter: "brightness(0.75)",
                  }}
                >
                  <source src={items[previewCount]?.src} />
                </video>
              ) : (
                <img
                  src={items[previewCount]?.src}
                  alt={items[previewCount]?.alt ?? "Ver más"}
                  className="w-100 h-100"
                  loading="lazy"
                  style={{
                    objectFit: "cover",
                    display: "block",
                    filter: "brightness(0.75)",
                  }}
                />
              )}

              <div
                className="d-flex flex-column align-items-center justify-content-center text-white"
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.15), rgba(0,0,0,0.55))",
                }}
              >
                <div className="fw-bold" style={{ fontSize: 18 }}>
                  Ver más
                </div>
                <div style={{ opacity: 0.9, fontSize: 13 }}>
                  {items.length} archivos
                </div>
              </div>
            </button>
          </div>
        )}
      </div>

      {isOpen && active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Galería"
          className="d-flex align-items-center justify-content-center"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) close();
          }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(0,0,0,0.72)",
            padding: 16,
          }}
        >
          <div
            style={{
              width: "min(1100px, 100%)",
              maxHeight: "min(80vh, 720px)",
              position: "relative",
              borderRadius: 14,
              overflow: "hidden",
              background: "rgba(10,10,10,0.92)",
              border: "1px solid rgba(255,255,255,0.12)",
              boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
            }}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Cerrar"
              className="btn btn-sm btn-light"
              style={{
                position: "absolute",
                top: 12,
                right: 12,
                zIndex: 2,
                borderRadius: 999,
              }}
            >
              <span aria-hidden="true">×</span>
            </button>

            <div
              className="d-flex align-items-center justify-content-between text-white"
              style={{
                position: "absolute",
                top: 12,
                left: 12,
                zIndex: 2,
                gap: 10,
                padding: "6px 10px",
                borderRadius: 999,
                background: "rgba(0,0,0,0.45)",
                border: "1px solid rgba(255,255,255,0.14)",
                backdropFilter: "blur(6px)",
              }}
            >
              <span style={{ fontSize: 13, opacity: 0.95 }}>
                {activeIndex + 1} / {items.length}
              </span>
            </div>

            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                width: "100%",
                height: "100%",
                aspectRatio: "16 / 9",
                userSelect: "none",
              }}
            >
              {active.type === "video" ? (
                <video
                  controls
                  autoPlay
                  playsInline
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    background: "rgba(0,0,0,0.25)",
                  }}
                >
                  <source src={active.src} />
                </video>
              ) : (
                <img
                  src={active.src}
                  alt={active.alt}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    background: "rgba(0,0,0,0.25)",
                  }}
                />
              )}
            </div>

            <button
              type="button"
              onClick={prev}
              aria-label="Anterior"
              className="btn btn-light"
              style={{
                position: "absolute",
                left: 12,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 2,
                borderRadius: 999,
                opacity: 0.95,
              }}
            >
              ‹
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Siguiente"
              className="btn btn-light"
              style={{
                position: "absolute",
                right: 12,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 2,
                borderRadius: 999,
                opacity: 0.95,
              }}
            >
              ›
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
