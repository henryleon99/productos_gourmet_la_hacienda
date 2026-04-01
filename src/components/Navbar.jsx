// Navbar.jsx
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
import { useState } from "react";

function Navbar({ onSearch }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  // Normalizar acentos y minúsculas
  const normalize = (str) =>
    str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

  // Palabras clave por ruta (incluye variantes)
  const keywords = {
    "/": ["Bienvenida", "Origen", "Nuestra"],
    "/acerca": ["acerca", "mision", "vision", "valores"],
    "/productos": ["producto", "productos", "gourmet"],
    "/contactos": ["contacto", "informacion", "formulario", "mapa", "contactos", "telefono", "correo"],
  };

  const handleSearch = () => {
    // 1. Validamos que no esté vacío. Si está vacío, salimos.
    if (!query.trim()) return; 

    const normalizedQuery = normalize(query);
    let destination = "/";

    // 2. Buscamos la ruta correcta
    for (const route in keywords) {
      if (
        keywords[route].some((word) =>
          // CORRECCIÓN: ¿La palabra clave contiene lo que el usuario escribió?
          normalize(word).includes(normalizedQuery)
        )
      ) {
        destination = route;
        break;
      }
    }

    // 3. Ejecutamos las acciones
    onSearch(query);
    navigate(destination);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoSearch}>
        <div className={styles.logoContainer}>
          <img
            src="/images/logo.jpg"
            alt="La Hacienda Gourmet"
            className={styles.logo}
          />
        </div>

        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Buscar..."
            className={styles.searchBar}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            type="button"
            className={styles.searchButton}
            onClick={handleSearch}
          >
            Buscar
          </button>
        </div>
      </div>

      <nav className={styles.navbar}>
        <ul className={styles.navbarList}>
          <li><Link to="/" className={styles.link}>Inicio</Link></li>
          <li><Link to="/productos" className={styles.link}>Productos</Link></li>
          <li><Link to="/acerca" className={styles.link}>Acerca</Link></li>
          <li><Link to="/contactos" className={styles.link}>Contactos</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;


