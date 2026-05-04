export default function Hero() {
  return (
    <header
      className="text-white d-flex align-items-center position-relative"
      style={{
        height: "90vh", // Un poco más alto para lucir la imagen
        backgroundImage: "url(https://picsum.photos/1600/900)",
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
        }}
      ></div>

      {/* Contenido Principal */}
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <small
          className="text-uppercase fw-light mb-2 d-block"
          style={{ letterSpacing: "2px" }}
        >
          Naturaleza, confort y exclusividad
        </small>

        <h1
          className="display-3 mb-4"
          style={{ fontFamily: "'Playfair Display', serif", fontWeight: "500" }}
        >
          Finca en venta <br /> en el corazón de Palmar de Varela
        </h1>

        <p
          className="lead mb-5"
          style={{ maxWidth: "600px", fontSize: "1.1rem" }}
        >
          Un lugar único para vivir, descansar o invertir.
          <br /> Privacidad, naturaleza y todas las comodidades a tu alcance.
        </p>

        {/* Fila de Iconos de Características con PNGs */}
        <div className="d-flex flex-wrap mb-5 gap-4">
          {/* Área Total */}
          <div className="d-flex align-items-center">
            <img
              src="/area_icon.png"
              alt="Icono Área"
              style={{
                width: "32px",
                height: "32px",
                marginRight: "12px",
                objectFit: "contain",
              }}
            />
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

          {/* Casa Principal */}
          <div className="d-flex align-items-center">
            <img
              src="/casa_icon.png"
              alt="Icono Casa"
              style={{
                width: "32px",
                height: "32px",
                marginRight: "12px",
                objectFit: "contain",
              }}
            />
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
            <img
              src="/cama_icon.png"
              alt="Icono Habitaciones"
              style={{
                width: "32px",
                height: "32px",
                marginRight: "12px",
                objectFit: "contain",
              }}
            />
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
            <img
              src="/banos_icon.png"
              alt="Icono Baños"
              style={{
                width: "32px",
                height: "32px",
                marginRight: "12px",
                objectFit: "contain",
              }}
            />
            <div>
              <small
                className="d-block text-white-50"
                style={{ fontSize: "0.7rem", textTransform: "uppercase" }}
              >
                Baños
              </small>
              <span className="fw-bold">6</span>
            </div>
          </div>

          {/* Parqueaderos */}
          <div className="d-flex align-items-center">
            <img
              src="/carro_icon.png"
              alt="Icono Parqueadero"
              style={{
                width: "32px",
                height: "32px",
                marginRight: "12px",
                objectFit: "contain",
              }}
            />
            <div>
              <small
                className="d-block text-white-50"
                style={{ fontSize: "0.7rem", textTransform: "uppercase" }}
              >
                Parqueaderos
              </small>
              <span className="fw-bold">4+</span>
            </div>
          </div>
        </div>

        <button
          className="btn btn-success px-4 py-2"
          style={{
            backgroundColor: "#3e5234",
            border: "none",
            borderRadius: "5px",
          }}
        >
          SOLICITAR MÁS INFORMACIÓN &rarr;
        </button>
      </div>

      {/* CÍRCULO TOUR (Estilo exacto a la imagen) */}
      <div
        className="position-absolute d-flex flex-column align-items-center justify-content-center text-white"
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
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
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
        <i className="fas fa-hand-pointer mt-2"></i>
      </div>
    </header>
  );
}
