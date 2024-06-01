import Carousel from "../../components/Carousel/Carousel";
import FormularioReservacion from "../../components/Reversaciones/FormularioReservacion/FormularioReservacion";
import "./Home.css";
const Home = () => {
  return (
    <main className="main-content">
      <div className="container">
        <div className="row-content">
          <Carousel />
          <FormularioReservacion />
        </div>
      </div>
    </main>
  );
};

export default Home;
