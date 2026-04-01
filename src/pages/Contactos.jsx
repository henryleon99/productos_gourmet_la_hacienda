
// Pestaña Contactos: contiene informacion sobre los contactos de la empresa, mapa interactivo y formulario.
import React, {useEffect} from "react";
import styles from "../styles/Contactos.module.css";

function Contactos({searchTerm}) {
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
    <section className={styles.contactos}>
      <h2>Contáctanos</h2>
      <p>
        En <strong>La Hacienda Gourmet</strong> nos dedicamos a distribuir nuestras salsas
        en todos los centros comerciales de El Salvador. Queremos estar cerca de ti
        y ofrecerte siempre la mejor experiencia gourmet.
      </p>

      <h2>{highlightText("Información de contacto")}</h2>
      <ul>
        <li>📍 Nuestra ubicación: 23 Calle pte. Colonia Laico #1037, San Salvador,
          El Salvador</li>
        <li>📞 Teléfono: (503) 1234-5678</li>
        <li>✉️ Correo: urquilla_aviles@hotmail.com</li>
        <li>🕒 Horarios: Lunes a sábado, 9:00 a.m. – 7:00 p.m.</li>
      </ul>

      <div className={styles.mapa}>
        <h2>{highlightText("Nuestra ubicación en el mapa")}</h2>
       <iframe
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d369.44136213811174!2d-89.20009353289406!3d13.71111997441525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f63310050069437%3A0x9d5430ec5119b745!2sLa%20Hacienda%20Productos%20Gourmet!5e1!3m2!1ses!2ssv!4v1775026128304!5m2!1ses!2ssv" 
         width="600"
         height="450"
         style={{ border: 0 }}
         allowFullScreen=""
         loading="lazy"
         referrerPolicy="no-referrer-when-downgrade"
         title="Ubicación La Hacienda Gourmet"
       ></iframe>
      </div>


      <h3>{highlightText("Formulario de contacto")}</h3>
      <form className={styles.contactForm}>
        <label>
          Nombre:
          <input type="text" name="nombre" placeholder="Tu nombre" required />
        </label>
        <label>
          Correo electrónico:
          <input type="email" name="correo" placeholder="tuemail@ejemplo.com" required />
        </label>
        <label>
          Mensaje:
          <textarea name="mensaje" placeholder="Escribe tu mensaje aquí..." required></textarea>
        </label>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default Contactos;

