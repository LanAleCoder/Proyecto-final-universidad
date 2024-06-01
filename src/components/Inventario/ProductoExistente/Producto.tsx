import { useState } from "react";
import DataTable from "react-data-table-component";

const Producto = () => {
  const [columns] = useState<any>([
    {
      id: "producto_id",
      name: "ID",
      position: 1,
      maxWidth: "130px",
      selector: (row: any) => row.centro_id,
      type: "text",
    },
    {
      id: "nombre_producto",
      name: "Nombre del producto",
      position: 2,
      selector: (row: any) =>
        row.nombre_producto != null ? row.nombre_producto : "No disponible.",
      type: "text",
    },
    {
      id: "caducidad",
      name: "Caducidad",
      position: 3,
      selector: (row: any) => row.caducidad,
      type: "text",
    },
    {
      id: "cantidad",
      name: "Cantidad",
      position: 4,
      selector: (row: any) =>
        row.cantidad != null ? row.cantidad : "No disponible.",

      type: "text",
    },
  ]);
  const data = [
    {
      centro_id: 12345,
      nombre_producto: "Leche Entera",
      caducidad: "2024-07-15",
      cantidad: 50,
    },
    {
      centro_id: 67890,
      nombre_producto: "Huevos de Gallina",
      caducidad: "2024-06-28",
      cantidad: 120,
    },
    {
      centro_id: 54321,
      nombre_producto: "Pan Integral",
      caducidad: "2024-06-05",
      cantidad: 25,
    },
    {
      centro_id: 98765,
      nombre_producto: null, // Para probar el "No disponible"
      caducidad: "2024-08-01",
      cantidad: 80,
    },
    {
      centro_id: 13579,
      nombre_producto: "Yogurt Griego",
      caducidad: "2024-06-10",
      cantidad: null, // Para probar el "No disponible"
    },
    // Add more objects as needed
  ];

  return <DataTable columns={columns} data={data} />;
};

export default Producto;
