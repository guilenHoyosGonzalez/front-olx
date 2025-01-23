import axios from "axios";
import React, { useEffect, useState } from "react";

function ListarComerciantes() {
  const url = "http://localhost:8081/rh-app/empleados";

  const [comerciantes, setComerciantes] = useState([]);

  useEffect(() => {
    cargarComerciantes();
  }, []);

  const cargarComerciantes = async () => {
    const data = await axios.get(url);
    setComerciantes(data.data);
  };

  return (
    <div className="container">
      <div className="container text-center" style={{ margin: "30px" }}>
        <h3>Prueba OLX</h3>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Razon Social</th>
            <th scope="col">Telefono</th>
            <th scope="col">Fecha Registro</th>
            <th scope="col">Numero Establecimiento</th>
            <th scope="col">Estado</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {comerciantes.map((comerciante, indice) => (
            <tr key={indice}>
              <th scope="row">3</th>
              <td>{comerciante.departament}</td>
              <td>{comerciante.departament}</td>
              <td>{comerciante.departament}</td>
              <td>{comerciante.departament}</td>
              <td>{comerciante.departament}</td>
              <td>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListarComerciantes;
