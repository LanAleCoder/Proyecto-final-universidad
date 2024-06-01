import Pedido from "../../components/Pedidos/Pedido/Pedido";
import './styles.css'
const Pedidos = () => {
  return (
    <main className="main-content">
      <div className="container">
        <div className="row-content row-content-center">
          <h2>Pedidos</h2>
          <Pedido />
          <Pedido />
          <Pedido />
          <Pedido />
        </div>
      </div>
    </main>
  );
};

export default Pedidos;
