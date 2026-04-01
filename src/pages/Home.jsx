import { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Home.module.css";
import Carrusel from "../components/Carrusel.jsx";

function Home({ searchTerm }) {
  
  // Función para resaltar texto
  const highlightText = (text) => {
    if (!searchTerm) return text;
    const regex = new RegExp(`(${searchTerm})`, "gi");
    return text.split(regex).map((part, i) =>
      regex.test(part) ? <mark key={i}>{part}</mark> : part
    );
  };

  // Hook para hacer scroll al primer mark
  useEffect(() => {
    if (searchTerm) {
      const firstMark = document.querySelector("mark");
      if (firstMark) {
        firstMark.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [searchTerm]);

  return (
    <main className={styles.home}>
      {/* Carrusel */}
      <Carrusel />  

      {/* Bienvenida */}
      <section className={styles.productWelcome}>
        <h2>{highlightText("Bienvenidos a La Hacienda Gourmet")}</h2>
        <p>
          Descubre el sabor único de nuestras salsas artesanales, elaboradas con ingredientes frescos y seleccionados.
        </p>
      </section>

      {/* Historia */}
      <section className={styles.productHistory}>
        <header>
          <h2>{highlightText("Del Origen a la Presencia Nacional")}</h2>
        </header>
        <p>
           La Hacienda Gourmet nació en 2009 con el propósito de demostrar que la cocina salvadoreña puede alcanzar
        nuevos niveles de sabor y calidad con productos artesanales cuidadosamente elaborados. Desde sus primeros
         pasos, la marca se propuso rescatar la tradición culinaria y darle un toque único a cada platillo.
        </p>

        <p>
          Con el tiempo, este sueño se convirtió en una empresa sólida que ha crecido de manera constante, conquistando
        el paladar de miles de familias y consolidando su presencia en el mercado nacional. La combinación de innovación
        y tradición ha sido clave para posicionarnos como una marca confiable y cercana. Entre nuestros productos más 
        destacados se encuentran: <strong>Salsa Albahaca</strong>, con ajo y cilantro; <strong>Salsa Parrillera</strong>, 
        sazonada con ajo; <strong>Salsa Marinadora</strong>, con sazón completa; <strong>Salsa La Hacienda</strong>, sazonada
         con ajo y especias; y <strong>Salsa Italiana</strong>, todas elaboradas con ingredientes seleccionados para realzar
          cada preparación.
        </p>

        <p>
          Hoy, nuestras salsas y sazonadores se distribuyen en las principales cadenas de supermercados de El Salvador, garantizando 
       accesibilidad y calidad en cada rincón del país. De esta manera, seguimos cumpliendo nuestro compromiso de llevar a cada mesa 
       el sabor auténtico que nos distingue.
        </p>
      </section>

      {/* Descripción */}
      <section className={styles.productDescription}>
        <header>
          <h2>Nuestras Salsas Gourmet</h2>
        </header>
        <p>
          Elaboradas con ingredientes frescos y seleccionados, nuestras salsas combinan tradición y calidad artesanal para ofrecerte un sabor único.
            Cada receta está pensada para acompañar tus comidas con un toque
          especial.
        </p>
        <nav>
          <Link to="/productos" className={styles.btnPrimary} aria-label="Ver catálogo de productos">
            Ver catálogo de productos
          </Link>
        </nav>
      </section>

      {/* Distribución */}
      <section className={styles.distribution}>
        <header>
          <h2>Distribución en El Salvador</h2>
        </header>
        <article>
          <p>
            La Hacienda Gourmet distribuye sus salsas en todos los centros
            comerciales de El Salvador, asegurando que nuestros productos estén
            disponibles en puntos estratégicos para llegar a más familias y
            amantes de la gastronomía.
          </p>
          <address>
            📍 Ubicación principal: 23 Calle pte. Colonia Laico #1037, San Salvador, El Salvador
          </address>
        </article>
      </section>
    </main>
  );
}

export default Home;
