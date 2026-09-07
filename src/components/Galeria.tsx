import React from "react";

type GalleryItem = {
  src: string;
  thumb: string;
  alt: string;
  type: "image" | "video";
};

// Lista estática de archivos para evitar el escaneo HEAD lento en cada carga.
const RAW_STATIC_GALLERY_ITEMS: GalleryItem[] = [
  { src: "/galeria/1.jpg", thumb: "/galeria/thumbs/1.jpg", alt: "Foto 1 de la finca", type: "image" },
  { src: "/galeria/2.jpg", thumb: "/galeria/thumbs/2.jpg", alt: "Foto 2 de la finca", type: "image" },
  { src: "/galeria/3.mp4", thumb: "/galeria/thumbs/3.jpg", alt: "Video 3 de la finca", type: "video" },
  { src: "/galeria/4.mp4", thumb: "/galeria/thumbs/4.jpg", alt: "Video 4 de la finca", type: "video" },
  { src: "/galeria/5.jpg", thumb: "/galeria/thumbs/5.jpg", alt: "Foto 5 de la finca", type: "image" },
  { src: "/galeria/6.jpg", thumb: "/galeria/thumbs/6.jpg", alt: "Foto 6 de la finca", type: "image" },
  { src: "/galeria/7.jpg", thumb: "/galeria/thumbs/7.jpg", alt: "Foto 7 de la finca", type: "image" },
  { src: "/galeria/8.jpg", thumb: "/galeria/thumbs/8.jpg", alt: "Foto 8 de la finca", type: "image" },
  { src: "/galeria/9.jpg", thumb: "/galeria/thumbs/9.jpg", alt: "Foto 9 de la finca", type: "image" },
  { src: "/galeria/10.jpg", thumb: "/galeria/thumbs/10.jpg", alt: "Foto 10 de la finca", type: "image" },
  { src: "/galeria/11.jpg", thumb: "/galeria/thumbs/11.jpg", alt: "Foto 11 de la finca", type: "image" },
  { src: "/galeria/12.jpg", thumb: "/galeria/thumbs/12.jpg", alt: "Foto 12 de la finca", type: "image" },
  { src: "/galeria/13.jpg", thumb: "/galeria/thumbs/13.jpg", alt: "Foto 13 de la finca", type: "image" },
  { src: "/galeria/14.jpg", thumb: "/galeria/thumbs/14.jpg", alt: "Foto 14 de la finca", type: "image" },
  { src: "/galeria/15.jpg", thumb: "/galeria/thumbs/15.jpg", alt: "Foto 15 de la finca", type: "image" },
  { src: "/galeria/16.jpg", thumb: "/galeria/thumbs/16.jpg", alt: "Foto 16 de la finca", type: "image" },
  { src: "/galeria/17.jpg", thumb: "/galeria/thumbs/17.jpg", alt: "Foto 17 de la finca", type: "image" },
  { src: "/galeria/18.mp4", thumb: "/galeria/thumbs/18.jpg", alt: "Video 18 de la finca", type: "video" },
  { src: "/galeria/19.mp4", thumb: "/galeria/thumbs/19.jpg", alt: "Video 19 de la finca", type: "video" },
  { src: "/galeria/20.jpg", thumb: "/galeria/thumbs/20.jpg", alt: "Foto 20 de la finca", type: "image" },
  { src: "/galeria/21.mp4", thumb: "/galeria/thumbs/21.jpg", alt: "Video 21 de la finca", type: "video" },
  { src: "/galeria/22.mp4", thumb: "/galeria/thumbs/22.jpg", alt: "Video 22 de la finca", type: "video" },
  { src: "/galeria/23.jpg", thumb: "/galeria/thumbs/23.jpg", alt: "Foto 23 de la finca", type: "image" },
  { src: "/galeria/24.jpg", thumb: "/galeria/thumbs/24.jpg", alt: "Foto 24 de la finca", type: "image" },
  { src: "/galeria/25.jpg", thumb: "/galeria/thumbs/25.jpg", alt: "Foto 25 de la finca", type: "image" },
  { src: "/galeria/26.mp4", thumb: "/galeria/thumbs/26.jpg", alt: "Video 26 de la finca", type: "video" },
  { src: "/galeria/27.jpg", thumb: "/galeria/thumbs/27.jpg", alt: "Foto 27 de la finca", type: "image" },
  { src: "/galeria/28.jpg", thumb: "/galeria/thumbs/28.jpg", alt: "Foto 28 de la finca", type: "image" },
  { src: "/galeria/29.jpg", thumb: "/galeria/thumbs/29.jpg", alt: "Foto 29 de la finca", type: "image" },
  { src: "/galeria/32.jpg", thumb: "/galeria/thumbs/32.jpg", alt: "Foto 32 de la finca", type: "image" },
  { src: "/galeria/33.jpg", thumb: "/galeria/thumbs/33.jpg", alt: "Foto 33 de la finca", type: "image" },
  { src: "/galeria/34.jpg", thumb: "/galeria/thumbs/34.jpg", alt: "Foto 34 de la finca", type: "image" },
  { src: "/galeria/35.jpg", thumb: "/galeria/thumbs/35.jpg", alt: "Foto 35 de la finca", type: "image" },
  { src: "/galeria/36.jpg", thumb: "/galeria/thumbs/36.jpg", alt: "Foto 36 de la finca", type: "image" },
  { src: "/galeria/37.jpg", thumb: "/galeria/thumbs/37.jpg", alt: "Foto 37 de la finca", type: "image" },
  { src: "/galeria/38.jpg", thumb: "/galeria/thumbs/38.jpg", alt: "Foto 38 de la finca", type: "image" },
  { src: "/galeria/39.jpg", thumb: "/galeria/thumbs/39.jpg", alt: "Foto 39 de la finca", type: "image" },
  { src: "/galeria/40.jpg", thumb: "/galeria/thumbs/40.jpg", alt: "Foto 40 de la finca", type: "image" },
  { src: "/galeria/41.jpg", thumb: "/galeria/thumbs/41.jpg", alt: "Foto 41 de la finca", type: "image" },
  { src: "/galeria/42.jpg", thumb: "/galeria/thumbs/42.jpg", alt: "Foto 42 de la finca", type: "image" },
  { src: "/galeria/43.jpg", thumb: "/galeria/thumbs/43.jpg", alt: "Foto 43 de la finca", type: "image" },
  { src: "/galeria/44.jpg", thumb: "/galeria/thumbs/44.jpg", alt: "Foto 44 de la finca", type: "image" },
  { src: "/galeria/45.mp4", thumb: "/galeria/thumbs/45.jpg", alt: "Video 45 de la finca", type: "video" },
  { src: "/galeria/46.mp4", thumb: "/galeria/thumbs/46.jpg", alt: "Video 46 de la finca", type: "video" },
  { src: "/galeria/47.mp4", thumb: "/galeria/thumbs/47.jpg", alt: "Video 47 de la finca", type: "video" },
  { src: "/galeria/48.jpg", thumb: "/galeria/thumbs/48.jpg", alt: "Foto 48 de la finca", type: "image" },
  { src: "/galeria/49.jpg", thumb: "/galeria/thumbs/49.jpg", alt: "Foto 49 de la finca", type: "image" },
  { src: "/galeria/50.mp4", thumb: "/galeria/thumbs/50.jpg", alt: "Video 50 de la finca", type: "video" },
  { src: "/galeria/51.mp4", thumb: "/galeria/thumbs/51.jpg", alt: "Video 51 de la finca", type: "video" },
  { src: "/galeria/52.mp4", thumb: "/galeria/thumbs/52.jpg", alt: "Video 52 de la finca", type: "video" },
  { src: "/galeria/53.mp4", thumb: "/galeria/thumbs/53.jpg", alt: "Video 53 de la finca", type: "video" },
  { src: "/galeria/54.jpg", thumb: "/galeria/thumbs/54.jpg", alt: "Foto 54 de la finca", type: "image" },
  { src: "/galeria/55.mp4", thumb: "/galeria/thumbs/55.jpg", alt: "Video 55 de la finca", type: "video" },
  { src: "/galeria/56.jpg", thumb: "/galeria/thumbs/56.jpg", alt: "Foto 56 de la finca", type: "image" },
  { src: "/galeria/57.jpg", thumb: "/galeria/thumbs/57.jpg", alt: "Foto 57 de la finca", type: "image" },
  { src: "/galeria/58.jpg", thumb: "/galeria/thumbs/58.jpg", alt: "Foto 58 de la finca", type: "image" },
  { src: "/galeria/59.mp4", thumb: "/galeria/thumbs/59.jpg", alt: "Video 59 de la finca", type: "video" },
  { src: "/galeria/60.mp4", thumb: "/galeria/thumbs/60.jpg", alt: "Video 60 de la finca", type: "video" },
  { src: "/galeria/61.mp4", thumb: "/galeria/thumbs/61.jpg", alt: "Video 61 de la finca", type: "video" },
  { src: "/galeria/62.mp4", thumb: "/galeria/thumbs/62.jpg", alt: "Video 62 de la finca", type: "video" },
  { src: "/galeria/63.mp4", thumb: "/galeria/thumbs/63.jpg", alt: "Video 63 de la finca", type: "video" },
  { src: "/galeria/64.mp4", thumb: "/galeria/thumbs/64.jpg", alt: "Video 64 de la finca", type: "video" },
];
 
const STATIC_GALLERY_ITEMS: GalleryItem[] = RAW_STATIC_GALLERY_ITEMS.map((item) => ({
  ...item,
  src: item.src.startsWith("/") ? `${import.meta.env.BASE_URL}${item.src.slice(1)}` : item.src,
  thumb: item.thumb.startsWith("/") ? `${import.meta.env.BASE_URL}${item.thumb.slice(1)}` : item.thumb,
}));

export default function Galeria() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isMobile, setIsMobile] = React.useState(false);

  // Detectar dispositivo para el orden inteligente
  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Calcular items reordenados si es móvil
  const items = React.useMemo(() => {
    if (isMobile) {
      const verticals = STATIC_GALLERY_ITEMS.filter((item) => {
        const match = item.src.match(/\/galeria\/(\d+)\./);
        return match && parseInt(match[1]) >= 44;
      });
      const horizontals = STATIC_GALLERY_ITEMS.filter((item) => {
        const match = item.src.match(/\/galeria\/(\d+)\./);
        return match && parseInt(match[1]) < 44;
      });
      return [...verticals, ...horizontals];
    }
    return STATIC_GALLERY_ITEMS;
  }, [isMobile]);

  const previewCount = 5;
  const previewItems = items.slice(0, previewCount);

  const openAt = (index: number) => {
    setActiveIndex(index);
    setIsOpen(true);
  };
  const close = () => setIsOpen(false);

  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [duration, setDuration] = React.useState(0);

  const onLoadedMetadata = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    setDuration(video.duration || 0);
    setCurrentTime(video.currentTime || 0);
  };

  const onTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    setCurrentTime(video.currentTime || 0);
  };

  const onSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    try {
      if (videoRef.current) videoRef.current.currentTime = val;
    } catch {}
    setCurrentTime(val);
  };

  const pauseAndPrev = () => {
    try {
      videoRef.current?.pause();
      if (videoRef.current) videoRef.current.currentTime = 0;
    } catch {}
    setActiveIndex((i) => (i - 1 + items.length) % items.length);
  };

  const pauseAndNext = () => {
    try {
      videoRef.current?.pause();
      if (videoRef.current) videoRef.current.currentTime = 0;
    } catch {}
    setActiveIndex((i) => (i + 1) % items.length);
  };

  React.useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") pauseAndPrev();
      if (e.key === "ArrowRight") pauseAndNext();
    };

    document.addEventListener("keydown", onKeyDown, true);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown, true);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, items.length]);

  const active = items[activeIndex];

  // Precarga de la siguiente imagen
  const nextIndex = (activeIndex + 1) % items.length;
  const nextItem = items[nextIndex];

  React.useEffect(() => {
    setCurrentTime(0);
    setDuration(0);
  }, [active?.src]);

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
              style={{ cursor: "pointer", position: "relative" }}
            >
              <div
                className="rounded overflow-hidden"
                style={{ aspectRatio: "4 / 3", background: "#f0f0f0", position: "relative" }}
              >
                {/* En el grid siempre usamos la miniatura (thumb) para carga instantánea */}
                <img
                  src={it.thumb}
                  alt={it.alt}
                  className="w-100 h-100"
                  loading="lazy"
                  style={{ objectFit: "cover", display: "block" }}
                />
                {it.type === "video" && (
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "rgba(0,0,0,0.2)",
                    }}
                  >
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        backgroundColor: "rgba(255,255,255,0.8)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 4,
                      }}
                    >
                      <div
                        style={{
                          width: 0,
                          height: 0,
                          borderTop: "10px solid transparent",
                          borderBottom: "10px solid transparent",
                          borderLeft: "15px solid #000",
                        }}
                      />
                    </div>
                  </div>
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
              <img
                src={items[previewCount]?.thumb}
                alt={items[previewCount]?.alt ?? "Ver más"}
                className="w-100 h-100"
                loading="lazy"
                style={{
                  objectFit: "cover",
                  display: "block",
                  filter: "brightness(0.75)",
                }}
              />

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
          className="d-flex align-items-center justify-content-center galeria-overlay"
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
          {/* Precarga de la siguiente imagen original */}
          {nextItem.type === "image" && (
            <img
              src={nextItem.src}
              style={{ display: "none" }}
              aria-hidden="true"
              alt=""
            />
          )}

          <div
            className="galeria-modal"
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
              className="btn btn-sm btn-light galeria-close"
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
              className="d-flex align-items-center justify-content-between text-white galeria-counter"
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
              className="d-flex align-items-center justify-content-center galeria-media"
              style={{
                width: "100%",
                height: "100%",
                aspectRatio: "16 / 9",
                userSelect: "none",
                paddingBottom: 40,
                position: "relative",
                minHeight: 0,
              }}
            >
              {active.type === "video" ? (
                <>
                  <video
                    key={active.src}
                    ref={videoRef}
                    controls
                    autoPlay
                    playsInline
                    preload="metadata"
                    poster={active.thumb}
                    onLoadedMetadata={onLoadedMetadata}
                    onTimeUpdate={onTimeUpdate}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      background: "rgba(0,0,0,0.25)",
                    }}
                  >
                    <source src={active.src} />
                  </video>

                  <div
                    aria-hidden="true"
                    className="galeria-progress"
                    style={{
                      position: "absolute",
                      left: 0,
                      right: 0,
                      bottom: 0,
                      padding: 8,
                      background:
                        "linear-gradient(0deg, rgba(0,0,0,0.55), transparent)",
                      zIndex: 3,
                    }}
                  >
                    <input
                      type="range"
                      min={0}
                      max={duration || 0}
                      step={0.01}
                      value={Math.min(currentTime, duration || 0)}
                      onChange={onSeek}
                      style={{ width: "100%" }}
                    />
                  </div>
                </>
              ) : (
                <img
                  key={active.src}
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
              onClick={pauseAndPrev}
              aria-label="Anterior"
              className="btn btn-light galeria-nav galeria-nav-prev"
              style={{
                position: "absolute",
                left: 12,
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              ‹
            </button>
            <button
              type="button"
              onClick={pauseAndNext}
              aria-label="Siguiente"
              className="btn btn-light galeria-nav galeria-nav-next"
              style={{
                position: "absolute",
                right: 12,
                top: "50%",
                transform: "translateY(-50%)",
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
