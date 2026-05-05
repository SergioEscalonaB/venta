
export default function Ubicacion() {
  return (
    <section id="ubicacion" className="container my-5 py-5">
      <div className="text-center mb-5">
        <h2 
          className="display-5" 
          style={{ fontFamily: "'Playfair Display', serif", color: "#3e5234" }}
        >
          Ubicación
        </h2>
        <div 
          className="mx-auto" 
          style={{ width: "60px", height: "3px", backgroundColor: "#3e5234", marginTop: "10px" }}
        ></div>
      </div>
      
      <div 
        className="overflow-hidden" 
        style={{ 
          borderRadius: "20px", 
          boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
          border: "1px solid rgba(0,0,0,0.05)" 
        }}
      >
        <iframe
          src="https://www.google.com/maps?q=10%C2%B041'46.3%22N%2074%C2%B047'38.5%22W&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="500"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          title="Ubicación de la finca"
        ></iframe>
      </div>
      
      <div className="mt-4 text-center">
        <p className="text-muted">
          <i className="fa-solid fa-location-dot me-2" style={{ color: "#3e5234" }}></i>
          Ubicada estratégicamente para ofrecer tranquilidad y fácil acceso.
        </p>
      </div>
    </section>
  );
}