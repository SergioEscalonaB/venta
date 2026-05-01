
export default function Tour360() {
    return(
        <section id="tour" className="bg-light py-5">
        <div className="container text-center">
          <h2>Tour 360°</h2>
          <p>Explora la finca de manera interactiva</p>
          <iframe
            title="tour"
            src="https://www.google.com/maps/embed?pb=!4v"
            width="100%"
            height="400"
            style={{border:0}}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>
    );
}