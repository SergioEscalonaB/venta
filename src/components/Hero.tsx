export default function Hero() {
  const iconWrapStyle: React.CSSProperties = {
    width: 44,
    height: 44,
    marginRight: 12,
    borderRadius: 12,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.18)",
    boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
    backdropFilter: "blur(4px)",
  };

  return (
    <header
      className="text-white d-flex align-items-center position-relative site-hero"
      style={{
        height: "100vh", // Un poco más alto para lucir la imagen
        backgroundImage: "url(https://picsum.photos/1600/900)", // Cambiar aca la imgane principal de fondo
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay oscuro para legibilidad */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.4)",
          pointerEvents: "none",
        }}
      ></div>

      {/* Contenido Principal */}
      <div
        className="container position-relative site-hero-content"
        style={{ zIndex: 2 }}
      >
        <small
          className="text-uppercase fw-light mb-2 d-block"
          style={{ letterSpacing: "2px" }}
        >
          Naturaleza, confort y exclusividad
        </small>

        <h1
          className="display-3 mb-4 site-hero-title"
          style={{ fontFamily: "'Playfair Display', serif", fontWeight: "500" }}
        >
          Finca en venta <br /> en el corazón de Palmar de Varela
        </h1>

        <p
          className="lead mb-5 site-hero-lead"
          style={{ maxWidth: "600px", fontSize: "1.1rem" }}
        >
          Un lugar único para vivir, descansar o invertir.
          <br /> Privacidad, naturaleza y todas las comodidades a tu alcance.
        </p>

        {/* Fila de Iconos de Características */}
        <div className="d-flex flex-wrap mb-5 gap-4 site-hero-features">
          {/* Área Total */}
          <div className="d-flex align-items-center">
            <span style={iconWrapStyle} aria-hidden="true">
              <i
                className="fa-solid fa-ruler-combined"
                style={{
                  fontSize: 20,
                  filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.35))",
                  opacity: 0.95,
                }}
              />
            </span>
            <div>
              <small
                className="d-block text-white-50"
                style={{ fontSize: "0.7rem", textTransform: "uppercase" }}
              >
                Área total
              </small>
              <span className="fw-bold">5.4 Hectáreas</span>
            </div>
          </div>

          {/* Area Construida */}
          <div className="d-flex align-items-center">
            <span style={iconWrapStyle} aria-hidden="true">
              <i
                className="fa-solid fa-building-columns fa-2x"
                style={{
                  fontSize: 20,
                  filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.35))",
                  opacity: 0.95,
                }}
              />
            </span>
            <div>
              <small
                className="d-block text-white-50"
                style={{ fontSize: "0.7rem", textTransform: "uppercase" }}
              >
                Área construida
              </small>
              <span className="fw-bold">1.200 m²</span>
            </div>
          </div>

          {/* Casa Principal */}
          <div className="d-flex align-items-center">
            <span style={iconWrapStyle} aria-hidden="true">
              <i
                className="fa-solid fa-house-chimney"
                style={{
                  fontSize: 20,
                  filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.35))",
                  opacity: 0.95,
                }}
              />
            </span>
            <div>
              <small
                className="d-block text-white-50"
                style={{ fontSize: "0.7rem", textTransform: "uppercase" }}
              >
                Casa principal
              </small>
              <span className="fw-bold">420 m²</span>
            </div>
          </div>

          {/* Habitaciones */}
          <div className="d-flex align-items-center">
            <span style={iconWrapStyle} aria-hidden="true">
              <i
                className="fa-solid fa-bed"
                style={{
                  fontSize: 20,
                  filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.35))",
                  opacity: 0.95,
                }}
              />
            </span>
            <div>
              <small
                className="d-block text-white-50"
                style={{ fontSize: "0.7rem", textTransform: "uppercase" }}
              >
                Habitaciones
              </small>
              <span className="fw-bold">5</span>
            </div>
          </div>

          {/* Baños */}
          <div className="d-flex align-items-center">
            <span style={iconWrapStyle} aria-hidden="true">
              <i
                className="fa-solid fa-bath"
                style={{
                  fontSize: 20,
                  filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.35))",
                  opacity: 0.95,
                }}
              />
            </span>
            <div>
              <small
                className="d-block text-white-50"
                style={{ fontSize: "0.7rem", textTransform: "uppercase" }}
              >
                Baños
              </small>
              <span className="fw-bold">4</span>
            </div>
          </div>
        </div>

        <button
          className="btn btn-success px-4 py-2 site-hero-cta"
          onClick={() =>
            window.open(
              "https://wa.me/+573152261110?text=Hola, me interesa la finca en venta en Palmar de Varela.",
            )
          }
          style={{
            backgroundColor: "#3e5234",
            border: "none",
            borderRadius: "5px",
          }}
        >
          SOLICITAR MÁS INFORMACIÓN &rarr;
        </button>
      </div>

      {/* CÍRCULO TOUR*/}
      <a
        className="position-absolute d-flex flex-column align-items-center justify-content-center text-white text-decoration-none site-tour-circle"
        href="#tour"
        style={{
          right: "8%",
          bottom: "15%",
          width: "160px",
          height: "160px",
          border: "1px solid rgba(255,255,255,0.6)",
          borderRadius: "50%",
          textAlign: "center",
          cursor: "pointer",
          backdropFilter: "blur(5px)",
          transition: "transform 0.3s",
          zIndex: 3,
        }}
        onClick={(e) => {
          e.preventDefault();
          const el = document.getElementById("tour");
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
          window.location.hash = "tour";
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        aria-label="Ir al Tour Virtual 360"
      >
        <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>360°</span>
        <small
          className="text-uppercase"
          style={{ fontSize: "0.7rem", letterSpacing: "1px" }}
        >
          Tour Virtual
        </small>
        <small style={{ fontSize: "0.6rem", opacity: 0.8 }}>
          Explora cada rincón
        </small>
        <span className="mt-2" aria-hidden="true" style={{ opacity: 0.9 }}>
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.35))" }}
          >
            <path
              d="M8 11V6.75C8 5.78 8.78 5 9.75 5C10.72 5 11.5 5.78 11.5 6.75V11"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.5 11V7.75C11.5 6.78 12.28 6 13.25 6C14.22 6 15 6.78 15 7.75V12"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15 12V9.25C15 8.28 15.78 7.5 16.75 7.5C17.72 7.5 18.5 8.28 18.5 9.25V14.5C18.5 18.09 16.09 20 13.25 20H12.3C10.18 20 8.52 18.71 7.78 16.91L6.3 13.3C5.96 12.47 6.36 11.53 7.18 11.2C7.97 10.88 8.86 11.24 9.22 12L10 13.75"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </a>
    </header>
  );
}
