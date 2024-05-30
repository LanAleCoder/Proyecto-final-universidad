import React from 'React';
import  '/navbard.css';
const Navbar: React.FC = () => {

    return (
      <nav className="navbar">
        <div className="navbar-brand">Mi Restaurante</div>
        <ul className="navbar-menu">
          <li className="navbar-item"><a href="#home">Inicio</a></li>
          <li className="navbar-item"><a href="#menu">Menú</a></li>
          <li className="navbar-item"><a href="#about">Nosotros</a></li>
          <li className="navbar-item"><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;
