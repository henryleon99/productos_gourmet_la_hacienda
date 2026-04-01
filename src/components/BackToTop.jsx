import "react-router-dom";
import React, { useEffect, useState } from "react";
import styles from "../styles/BackToTop.module.css";
// Botón para regresar al incio de la pestaña luego de realizar scroll

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button 
      className={`${styles.btnTop} ${visible ? styles.show : styles.hide}`} 
      onClick={scrollToTop}
    >
      ↑ Volver al inicio
    </button>
  );
};

export default BackToTop;
