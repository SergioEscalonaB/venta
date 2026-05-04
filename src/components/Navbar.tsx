import React from "react";

export default function Navbar() {
  const navRef = React.useRef<HTMLElement | null>(null);
  const collapseRef = React.useRef<HTMLDivElement | null>(null);
  const [mobileSpacerHeight, setMobileSpacerHeight] = React.useState(0);

  React.useEffect(() => {
    const collapseEl = collapseRef.current;
    const navEl = navRef.current;
    if (!collapseEl) return;

    const updateSpacer = () => {
      if (window.innerWidth >= 992) {
        setMobileSpacerHeight(0);
        return;
      }

      const isOpen = collapseEl.classList.contains("show");
      const navHeight = navEl?.getBoundingClientRect().height ?? 0;
      setMobileSpacerHeight(isOpen ? navHeight : 0);
    };

    const handleShown = () => updateSpacer();
    const handleHidden = () => setMobileSpacerHeight(0);

    collapseEl.addEventListener("shown.bs.collapse", handleShown);
    collapseEl.addEventListener("hidden.bs.collapse", handleHidden);
    window.addEventListener("resize", updateSpacer);

    updateSpacer();

    return () => {
      collapseEl.removeEventListener("shown.bs.collapse", handleShown);
      collapseEl.removeEventListener("hidden.bs.collapse", handleHidden);
      window.removeEventListener("resize", updateSpacer);
    };
  }, []);

  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        className={`navbar navbar-expand-lg navbar-dark position-fixed top-0 start-0 w-100 site-navbar ${
          scrolled ? "scrolled" : ""
        }`}
        style={{ zIndex: 1000 }}
      >
        <div className="container">
          <a
            className="navbar-brand d-flex align-items-center site-navbar-brand"
            href="#"
          >
            <img
              src="/Logo_solo.png"
              alt="Logo Finca Guadalupe"
              className="site-navbar-logo"
              style={{ height: "40px", width: "auto", marginRight: "10px" }}
            />
            <div className="site-navbar-title" style={{ lineHeight: "1.3" }}>
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

          <div
            ref={collapseRef}
            className="collapse navbar-collapse site-navbar-collapse"
            id="navbarNav"
          >
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
                  className="nav-link btn btn-success text-white px-3 rounded-pill site-navbar-whatsapp"
                  href="https://wa.me/+573152261110?text=Hola, me interesa la finca en venta en Palmar de Varela."
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
      <div aria-hidden="true" style={{ height: mobileSpacerHeight }} />
    </>
  );
}
