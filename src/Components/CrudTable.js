import React from "react";
import CrudTableRow from "./CrudTableRow";

export default function CrudTable({ data }) {
  return (
    <>
      <h3>Tabla de Datos</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Aldea</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="3">Sin datos</td>
            </tr>
          ) : (
            data.map((el) => {
              return <CrudTableRow key={el.id} el={el} />;
            })
          )}
        </tbody>
      </table>
    </>
  );
}
