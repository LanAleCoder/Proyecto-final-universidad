import SocialNetwork from "../SocialNetwork/SocialNetwork";
import Linkedin from "../icons/Linkedin";
import Github from "../icons/Github";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="section-black-footer">
        <div className="social-networks">
          <SocialNetwork>
            <Linkedin />
          </SocialNetwork>
          <SocialNetwork>
            <Github />
          </SocialNetwork>
        </div>
        <div className="footer__links">
          <nav className="footer__nav">
            <ul className="footer__links-list">
              <li className="footer__link-item">
                <a href="/"> Inicio </a>
              </li>
              <li className="footer__link-item">
                <a href="#contacto"> Contacto </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="copyright">
        <p>
          © 2024 Diseñado por Peter Alexander. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
