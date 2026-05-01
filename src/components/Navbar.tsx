
export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">Finca El Paraíso</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#">Inicio</a></li>
              <li className="nav-item"><a className="nav-link" href="#fotos">Fotos</a></li>
              <li className="nav-item"><a className="nav-link" href="#tour">Tour 360</a></li>
              <li className="nav-item"><a className="nav-link" href="#ubicacion">Ubicación</a></li>
              <li className="nav-item"><a className="nav-link" href="#contacto">Contacto</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
}
