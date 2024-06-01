import React from "react";
import "./style.css";
const Pedido = () => {
  return (
    <div className="card text-center border-0">
      <div className="card-body">
        <div className="card-card-avatar mb-4">
          <div className="card-avatar avatar-border two"></div>
        </div>
        <div className="mb-5 card-description">
          <h5 className="card-title mb-1">Sopa premium</h5>
          <div className="text-muted">Q150.00</div>
        </div>
      </div>
    </div>
  );
};

export default Pedido;
