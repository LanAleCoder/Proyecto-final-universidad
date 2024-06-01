import LOGO from "../icons/LOGO";
import "./navbar.css";
import Cart from "../icons/cart";
const Navbar = () => {
  return (
    <header className="header">
      <nav className="header__nav" aria-label="Navegación principal">
        <a href="/" className="header__link-home">
          <LOGO />
        </a>
        <ul className="header__nav-ul">
          <li className="header__nav-li">
            <a className="header__nav-link" href="/">
              Inicio
            </a>
          </li>
          <li className="header__nav-li">
            <a className="header__nav-link" href="/ventas">
              Ventas
            </a>
          </li>
          <li className="header__nav-li">
            <a className="header__nav-link" href="/inventario">
              Inventario
            </a>
          </li>
        </ul>
        <a href="/pedidos" className="header__cart-button">
          <Cart />
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
