import React from 'React';
import  '/navbard.css';
const Navbar: React.FC = () => {

    const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

    return (
      <nav className="navbar">
        <div className="navbar-brand">Sabores del Alma</div>
        <ul className="navbar-menu">
          <li className="navbar-item"><a href="#home">Inicio</a></li>
          <li className="navbar-item"><a href="#menu">Menú</a></li>
          <li className="navbar-item dropdown">
          <a href="#more" onClick={toggleDropdown}>
            Más <span className="dropdown-arrow">{dropdownOpen ? '▲' : '▼'}</span>
          </a>
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li className="dropdown-item"><a href="#gallery">Pedidos</a></li>
              <li className="dropdown-item"><a href="#testimonials">Inventario</a></li>
              <li className="dropdown-item"><a href="#careers">Menú</a></li>
            </ul>
          )}
        </li>
          <li className="navbar-item"><a href="#about">Nosotros</a></li>
          <li className="navbar-item dropdown">
          <a href="#more" onClick={toggleDropdown}>
            Más <span className="dropdown-arrow">{dropdownOpen ? '▲' : '▼'}</span>
          </a>
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li className="dropdown-item"><a href="#gallery">Eventos</a></li>
              <li className="dropdown-item"><a href="#testimonials">Historia</a></li>
              <li className="dropdown-item"><a href="#careers">Ventas</a></li>
              <li className="dropdown-item"><a href="#careers">Aforo</a></li>
            </ul>
          )}
        </li>
          <li className="navbar-item"><a href="#contact">Contacto</a></li>
          <li className="navbar-item dropdown">
          <a href="#more" onClick={toggleDropdown}>
            Más <span className="dropdown-arrow">{dropdownOpen ? '▲' : '▼'}</span>
          </a>
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li className="dropdown-item"><a href="#gallery">Contacto</a></li>
              <li className="dropdown-item"><a href="#testimonials">Reservas</a></li>
              <li className="dropdown-item"><a href="#careers">Galeria</a></li>
            </ul>
          )}
        </li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;
