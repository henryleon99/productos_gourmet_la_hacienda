

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState} from "react"; 
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import Productos from "./pages/Productos.jsx";
import Acerca from "./pages/Acerca.jsx";
import Contactos from "./pages/Contactos.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";
import BackToTop from "./components/BackToTop.jsx";
import ResetScroll from "./components/ResetScroll.jsx"; 
import "./App.css";

function App() {
  
  const [searchTerm, setSearchTerm] = useState("");

  return (
    
    <div className>
      <BrowserRouter>
      <ResetScroll />
        <Header />
        <Navbar 
      
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
          phone="+503 61099113" 
          message="Hola, estoy interesado en sus productos gourmet" 
        />

        <BackToTop saludo="Hola" />
      </BrowserRouter>
    </div>
  );
}

export default App;