// Pestaña Acerca de: la cual contiene informacion sobre el origen de la empresa, la misión, visión y valores
import React, {useEffect} from "react";
import styles from "../styles/Acerca.module.css";

function Acerca({ searchTerm }) {
  const highlightText = (text) => {
    if (!searchTerm) return text;
    const regex = new RegExp(`(${searchTerm})`, "gi");
    return text.split(regex).map((part, i) =>
      regex.test(part) ? <mark key={i}>{part}</mark> : part
    );
  };

  useEffect(() => {
    if (searchTerm) {
      const firstMark = document.querySelector("mark");
      if (firstMark) {
        firstMark.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [searchTerm]);


  return (
    <section className={styles.acerca}>
      <h2>Acerca de La Hacienda Gourmet</h2>

      <p>La Hacienda Gourmet es un proyecto dedicado a ofrecer productos
        artesanales de alta calidad, elaborados con ingredientes seleccionados
        y un toque único de tradición. Nuestro objetivo es brindar experiencias
        culinarias auténticas que conecten la innovación con la riqueza de la
        gastronomía local.</p>

      <h3>{highlightText("Quiénes somos")}</h3>
      <p>
  Este proyecto nace del esfuerzo de un equipo apasionado por la gastronomía y la tecnología,
  que busca integrar la innovación digital con la tradición culinaria. En <strong>La Hacienda Gourmet</strong>,
  cada visita se convierte en una experiencia única, donde el sabor y la presentación se unen con la claridad
  y la profesionalidad de nuestros recursos digitales.
</p>

<p>
  Nuestra historia comenzó en <strong>2009</strong>, impulsada por el deseo de superación y la firme convicción
  de demostrar que, para realzar el sabor de la comida salvadoreña, basta con un buen sazonador. Desde entonces,
  La Hacienda Gourmet ha ido conquistando poco a poco el mercado nacional, hasta consolidar su presencia en todos
  los supermercados de El Salvador.
</p>

<p>
  Hoy, nuestra marca representa no solo calidad y tradición, sino también cercanía con las familias salvadoreñas,
  reafirmando que la combinación de buen sazón y compromiso puede transformar cada plato en una experiencia memorable.
</p>





      <h3>{highlightText("Misión")}</h3>
      <p> Compartir sabores únicos y responsables, ofreciendo productos gourmet
        que respeten la tradición y al mismo tiempo integren procesos modernos
        y sostenibles.
      </p>

      <h3>{highlightText("Visión")}</h3>
      <p>
         Convertirnos en un referente de excelencia gastronómica, integrando
        tecnología y creatividad para llevar la experiencia gourmet a nuevos
        horizontes.
      </p>

      <h3>{highlightText("Valores")}</h3>
      <ul>
        <li>{highlightText("Calidad y autenticidad en cada producto")}</li>
        <li>{highlightText("Transparencia y responsabilidad en nuestros procesos")}</li>
        <li>{highlightText("Innovación y creatividad en la experiencia gourmet")}</li>
        <li>{highlightText("Compromiso con la sostenibilidad y la comunidad")}</li>
      </ul>

      <h3>{highlightText("Operación en El Salvador")}</h3>
      <p>La Hacienda Gourmet mantiene una sólida presencia en el mercado
         salvadoreño, distribuyendo sus salsas en los principales centros 
         comerciales y cadenas de supermercados del país. Esta cobertura 
         nacional garantiza que nuestros productos estén disponibles en puntos 
         estratégicos de todos los departamentos de El Salvador, acercándonos a 
         más familias y amantes de la gastronomía, siempre con la calidad que nos distingue.
      </p>
      
      <p> Nuestra estrategia de distribución se apoya en alianzas con cadenas 
      de alto prestigio y amplia cobertura, entre las que destacan:
      </p>

      <ol>
  <li>
    <strong>Super Selectos</strong>: la cadena de supermercados con mayor presencia en El Salvador,
    reconocida por su variedad de productos y su alcance nacional.
  </li>
  <li>
    <strong>Maxi Despensa</strong>: supermercados que se caracterizan por ofrecer precios bajos y accesibles,
    con sucursales en todo el país.
  </li>
  <li>
    <strong>Despensa Familiar</strong>: establecimientos que destacan por su oferta de productos frescos y económicos,
    orientados al consumo cotidiano de las familias.
  </li>
  <li>
    <strong>Walmart</strong>: empresa internacional con fuerte presencia en El Salvador,
    que asegura una distribución estratégica y confiable de nuestros productos.
  </li>
  <li>
    <strong>El Baratillo</strong>: minisupermercados ubicados en distritos de San Salvador y Chalatenango,
    reconocidos por su cercanía con las comunidades y su oferta de productos frescos a precios accesibles.
  </li>
</ol>





    </section>
  );
}

export default Acerca;
