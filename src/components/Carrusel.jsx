import { useState, useEffect } from "react";
import styles from "../styles/Carrusel.module.css";

function Carrusel(){

  const images = [
      { src: "/images/imagen1.jpg", alt: "Salsa artesanal 1" },
      { src: "/images/imagen2.png", alt: "Salsa artesanal 2" },
      { src: "/images/imagen3.png", alt: "Salsa artesanal 3" },
      { src: "/images/imagen4.png", alt: "Salsa artesanal 4" },
      { src: "/images/imagen5.jpg", alt: "Salsa artesanal 5" },
      { src: "/images/imagen6.png", alt: "Salsa artesanal 6" },
    ];
  
    const [current, setCurrent] = useState(0);
  
    
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % images.length);
      }, 4000);
      return () => clearInterval(interval);
    }, [images.length]);
  
    const nextSlide = () => {
      setCurrent((prev) => (prev + 1) % images.length);
    };
  
    const prevSlide = () => {
      setCurrent((prev) => (prev - 1 + images.length) % images.length);
    };

  return(

    <main className={styles.home}>
      {/* Carrusel */}
      <section className={styles.carousel} aria-label="Galería de productos destacados">
        <button onClick={prevSlide} className={styles.arrow}>‹</button>
        <figure className={styles.slide}>
          <img src={images[current].src} alt={images[current].alt} />
        </figure>
        <button onClick={nextSlide} className={styles.arrow}>›</button>
      </section>
    </main>


  )
};

export default Carrusel;
