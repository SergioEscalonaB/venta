import "./App.css";
import Caracteristicas from "./components/Caracteristicas";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import Galeria from "./components/Galeria";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Tour360 from "./components/Tour360";
import Ubicacion from "./components/Ubicacion";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Galeria />
      <Tour360 />
      <Ubicacion />
      <Caracteristicas />
      <Contacto />
      <Footer />
    </div>
  );
}
