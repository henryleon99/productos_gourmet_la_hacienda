import styles from  "../styles/Footer.module.css";

//Pie de pagina del sitio web

function Footer() {

  const currentYear = new Date().getFullYear();
  
  return (
    <footer className= {styles.footer}>
      
        <div className={styles.footerInfo}>
        <h3>La Hacienda Gourmet</h3>
        <p>Sabores únicos, calidad artesanal</p>
        <p>📍 Nuestra ubicación: <br></br> 23 Calle pte. Colonia Laico #1037, San Salvador, El Salvador</p>
        <p>📞 Nuestro numero de contacto: <br></br> +503 6109-9113</p>
        <p>✉️ Correo electronico: <br></br> urquilla_aviles@hotmail.com</p>
      </div>

      <div className={styles.footerSocial}>
       <h4>Síguenos</h4>
        <a href="https://facebook.com" className={styles.link}>Facebook</a> |
        <a href="https://instagram.com" className={styles.link}>Instagram</a> | 
        <a href="https://tiktok.com" className={styles.link}>TikTok</a> 
      </div>

      <p className={styles.copy}>
        © {currentYear} La Hacienda Gourmet - Todos los derechos reservados
      </p>
    </footer>
  );
}

export default Footer;
