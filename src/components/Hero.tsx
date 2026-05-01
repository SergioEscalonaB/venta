
export default function Hero() {
    return (
        <header className="text-white text-center d-flex align-items-center" style={{height: '80vh', backgroundImage: 'url(https://picsum.photos/1600/900)', backgroundSize: 'cover'}}>
        <div className="container">
          <h1 className="display-4">Finca en Venta</h1>
          <p className="lead">Naturaleza, confort y exclusividad</p>
          <button className="btn btn-success">Solicitar información</button>
        </div>
      </header>
    );
}