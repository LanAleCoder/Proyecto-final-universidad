import React from 'React';
import  '/navbard.css';
const Navbar: React.FC = () => {

    return (
      <nav className="navbar">
        <div className="navbar-brand">Sabores del Alma</div>
        <ul className="navbar-menu">
          <li className="navbar-item"><a href="#home">Inicio</a></li>
          <li className="navbar-item"><a href="#menu">Menú</a>
          <ul>
            <li><a href="#">Menú</a></li>
            <li><a href="#">Pedidos</a></li>
            <li><a href="#">Inventario</a></li>
          </ul>
          </li>
          <li className="navbar-item"><a href="#about">Nosotros</a>
          <ul>
            <li><a href="#">Eventos</a></li>
            <li><a href="#">Aforo</a></li>
            <li><a href="#">Historia</a></li>
            <li><a href="#">Ventas</a></li>
          </ul>
          </li>
          <li className="navbar-item"><a href="#contact">Contacto</a>
          <ul>
            <li><a href="#">Contacto</a></li>
            <li><a href="#">Reservaciones</a></li>
          </ul>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;
