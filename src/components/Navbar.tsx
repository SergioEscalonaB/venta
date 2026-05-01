export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark position-absolute top-0 start-0 w-100"
      style={{ backgroundColor: "transparent", zIndex: 1000 }}
    >
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src="/Logo_solo.png"
            alt="Logo Finca Guadalupe"
            style={{ height: "40px", width: "auto", marginRight: "10px" }}
          />
          <div style={{ lineHeight: "1.3" }}>
            <div>Finca</div>
            <div>Guadalupe</div>
          </div>
        </a>


        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#fotos">
                Fotos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#tour">
                Tour 360
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#ubicacion">
                Ubicación
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contacto">
                Contacto
              </a>
            </li>
            
            <li className="nav-item">
              <a
                className="nav-link btn btn-success text-white px-3 rounded-pill"
                href="https://wa.me/+573152261110"
                target="_blank"
                rel="noopener noreferrer"
                style={{ backgroundColor: "#25D366", border: "none" }}
              >
                <i className="fab fa-whatsapp me-2"></i>
                Escríbenos
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
