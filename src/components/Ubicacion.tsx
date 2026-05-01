
export default function Ubicacion() {
    return (
        <section id="ubicacion" className="container my-5">
        <h2 className="text-center mb-4">Ubicación</h2>
        <iframe
          src="https://www.google.com/maps?q=colombia&output=embed"
          width="100%"
          height="400"
          style={{border:0}}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </section>
    );
}