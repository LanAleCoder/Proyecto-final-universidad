import Layout from "../components/Layout/Layout";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Dashboard from "../pages/Dashboard/Dashboard";
import Pedidos from "../pages/Pedidos/Pedidos";
import Inventario from "../pages/Inventario/Inventario";

const DashboardRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ventas" element={<Dashboard />} />
          <Route path="/inventario" element={<Inventario />} />
          <Route path="/pedidos" element={<Pedidos />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default DashboardRoutes;
