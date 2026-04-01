

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react"; // 1. Importamos useEffect
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import Productos from "./pages/Productos.jsx";
import Acerca from "./pages/Acerca.jsx";
import Contactos from "./pages/Contactos.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";
import BackToTop from "./components/BackToTop.jsx";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // 2. Este efecto aplica el atributo al "cerebro" del navegador (HTML)
  useEffect(() => {
    const theme = darkMode ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    /* 3. Asegúrate de que "App" coincida exactamente con tu CSS */
    <div className={darkMode ? "App dark-mode" : "App light-mode"}>
      <BrowserRouter>
        <Header />
        <Navbar 
          darkMode={darkMode} 
          toggleTheme={toggleTheme} 
          onSearch={setSearchTerm} 
        />
        
        <Routes>
          <Route path="/" element={<Home searchTerm={searchTerm} />} />
          <Route path="/productos" element={<Productos searchTerm={searchTerm} />} />
          <Route path="/acerca" element={<Acerca searchTerm={searchTerm} />} />
          <Route path="/contactos" element={<Contactos searchTerm={searchTerm} />} />
        </Routes>
        
        <Footer />

        <WhatsAppButton 
          phone="+503 71625788" 
          message="Hola, estoy interesado en sus productos gourmet" 
        />

        <BackToTop saludo="Hola" />
      </BrowserRouter>
    </div>
  );
}

export default App;