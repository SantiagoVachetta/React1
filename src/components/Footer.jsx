import '../estilos/Footer.css';
import React from 'react';
import { Historial } from "../historial/Historial";
import { Home } from "../historial/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Footer = () => {
  return (
    <div className="Footer container">
      <footer className="footer">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/historial" element={<Historial />} />
            </Routes>
          </BrowserRouter>
      </footer>
    </div>
  );
  
}
export default Footer;

