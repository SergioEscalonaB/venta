export default function Caracteristicas() {
  const sections = [
    {
      title: "Visión General",
      icon: "fa-eye",
      items: [
        { label: "Área Total", value: "3.75 Hectáreas" },
        { label: "Uso Sugerido", value: "Agrícola, recreación, eventos o vivienda permanente" },
        { label: "Estado Jurídico", value: "Listo para escrituración directa" }
      ]
    },
    {
      title: "Arquitectura y Confort",
      icon: "fa-couch",
      items: [
        { label: "Casa Quinta Principal", value: "2 habitaciones amplias, 2 baños, sala, cocina y amplios corredores perimetrales" },
        { label: "Alojamiento de Operación", value: "Casa independiente para personal de servicio o cuidanderos" },
        { label: "Zonas Sociales", value: "Kiosko en material y kiosko tradicional de paja" },
        { label: "Eventos", value: "Batería de baños públicos (2 damas, 1 caballeros) y cocina de soporte exterior" },
        { label: "Recreación", value: "Mini cancha de fútbol integrada en zonas verdes" }
      ]
    },
    {
      title: "Tecnología y Servicios",
      icon: "fa-wifi",
      items: [
        { label: "Energía Eléctrica", value: "Red pública (Air-e) y respaldo mediante paneles solares" },
        { label: "Agua Permanente", value: "Pozo profundo (24h), sistema de riego y 3 tanques de reserva" },
        { label: "Conectividad", value: "Internet ilimitado y cámaras de seguridad con acceso remoto" }
      ]
    },
    {
      title: "Potencial Productivo",
      icon: "fa-seedling",
      items: [
        { label: "Cultivos", value: "1 hectárea de limón en producción y variedad de frutales" },
        { label: "Instalaciones Pecuarias", value: "Galpones, gallineros y porqueriza listos para explotación inmediata" }
      ]
    }
  ];

  return (
    <section id="caracteristicas" className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container py-4">
        <div className="text-center mb-5">
          <h2 
            className="display-5" 
            style={{ fontFamily: "'Playfair Display', serif", color: "#3e5234" }}
          >
            Detalles y Características de la Propiedad
          </h2>
          <div 
            className="mx-auto" 
            style={{ width: "80px", height: "3px", backgroundColor: "#3e5234", marginTop: "15px" }}
          ></div>
          <p className="mt-3 lead text-muted">Detalles técnicos y oportunidades de inversión de la propiedad</p>
        </div>

        <div className="row g-4">
          {sections.map((section, idx) => (
            <div key={idx} className="col-md-6">
              <div 
                className="h-100 p-4 bg-white border-0 shadow-sm" 
                style={{ borderRadius: "15px", transition: "transform 0.3s ease" }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div className="d-flex align-items-center mb-4">
                  <div 
                    className="d-flex align-items-center justify-content-center text-white me-3"
                    style={{ 
                      width: "45px", 
                      height: "45px", 
                      backgroundColor: "#3e5234", 
                      borderRadius: "10px" 
                    }}
                  >
                    <i className={`fa-solid ${section.icon} fs-5`}></i>
                  </div>
                  <h4 className="m-0" style={{ color: "#2c3e24", fontWeight: "600" }}>{section.title}</h4>
                </div>
                
                <div className="ps-2">
                  {section.items.map((item, iIdx) => (
                    <div key={iIdx} className="mb-3 border-start ps-3" style={{ borderLeft: "2px solid #e9ecef" }}>
                      <small className="text-uppercase fw-bold text-muted d-block" style={{ fontSize: "0.7rem", letterSpacing: "1px" }}>
                        {item.label}
                      </small>
                      <span style={{ color: "#495057", fontSize: "0.95rem" }}>{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 p-4 text-center rounded-4" style={{ backgroundColor: "#3e5234", color: "white" }}>
          <h5 className="mb-2">Ventaja Competitiva</h5>
          <p className="mb-0 opacity-75">
            Esta propiedad destaca por su <strong>autonomía hídrica total</strong> y su 
            capacidad de generación de ingresos inmediatos mediante la producción de limón tahití.
          </p>
        </div>
      </div>
    </section>
  );
}
