
import React from "react";

// Boton para enviar mensajes por WhatsApp, a la distribuidora de los productos Gourmet.
import { FaWhatsapp } from "react-icons/fa6"; 
import styles from "../styles/WhatsAppButton.module.css";

const WhatsAppButton = ({ phone, message }) => {
  const cleanPhone = phone.replace(/\D/g, "");
  const url = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;

  return (
    <div className={styles.whatsappFloating}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <button className={styles.whatsappBtn}>
          <FaWhatsapp style={{ marginRight: "8px" }} />
          Contáctanos <br /> por WhatsApp
        </button>
      </a>
    </div>
  );
};

export default WhatsAppButton;

