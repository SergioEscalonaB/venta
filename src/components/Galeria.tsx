
export default function Galeria() {
    return (
        <section id="fotos" className="container my-5">
        <h2 className="text-center mb-4">Galería</h2>
        <div className="row">
          {[1,2,3,4,5,6].map((i) => (
            <div className="col-md-4 mb-3" key={i}>
              <img src={`https://picsum.photos/400/300?random=${i}`} className="img-fluid rounded" />
            </div>
          ))}
        </div>
      </section>
    );
}
