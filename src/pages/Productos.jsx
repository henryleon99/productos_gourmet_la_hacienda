// Pestaña Productos: contiene informacion sobre los diferentes productos gourme que se ofrecen
import React, { useState } from "react";
import styles from "../styles/Productos.module.css";
import products from "../data/products.json";

const Products = () => {
  const [expandeId, setExpandeId] = useState(null);

  const toggleExpand = (id) => {
    setExpandeId(expandeId === id ? null : id);
  };

  return (
    <section className={styles.productsSection}>
      <h2 className={styles.sectionTitle}>Sección de Productos Gourmet</h2>
      <div className={styles.productsGrid}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <img
              src={product.image}
              alt={product.name.es}
              className={styles.productImage}
            />
            <div className={styles.productInfo}>
              <h3>{product.name.es}</h3>
              <p>
                <strong>Volumen:</strong> {product.volume}
              </p>
              <p>
                <strong>Precio:</strong> {product.price}
              </p>
              {expandeId === product.id && (
                <>
                  <p>
                    <strong>Descripción:</strong> {product.description}
                  </p>
                  <p>
                    <strong>Forma de uso:</strong> {product.utilization}
                  </p>
                </>
              )}
              <button
                className={styles.viewMore}
                onClick={() => toggleExpand(product.id)}
              >
                {expandeId === product.id ? "Ver menos" : "Ver más"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;

