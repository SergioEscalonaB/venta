
export default function Contacto() {
    return (
        <section id="contacto" className="container my-5 text-center">
            <h2>Contacto</h2>
            <p>¿Interesado? Escríbenos</p>
            <a href="https://wa.me/+573152261110?text=Hola, me interesa la finca en venta en Palmar de Varela.">
                <button className="btn btn-success">
                    <i className="fa-brands fa-whatsapp"></i> WhatsApp
                </button>
            </a>
        </section>
    );
}