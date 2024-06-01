import Layout from "../components/Layout/Layout";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Dashboard from "../pages/Dashboard/Dashboard";
import Pedidos from "../pages/Pedidos/Pedidos";

const DashboardRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard" element={<Pedidos />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default DashboardRoutes;
