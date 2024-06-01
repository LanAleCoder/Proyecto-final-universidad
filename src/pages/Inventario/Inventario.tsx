import React from "react";
import Producto from "../../components/Inventario/ProductoExistente/Producto";

const Inventario = () => {
  return (
    <main className="main-content">
      <div className="container">
        <div className="row-content row-content-center">
          <h2>Inventario</h2>
          <Producto />
        </div>
      </div>
    </main>
  );
};

export default Inventario;
