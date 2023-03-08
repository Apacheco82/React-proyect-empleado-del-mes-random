import React from "react";



const Empleados = (emp) => {

  const {nombre, apellidos, edad, puesto} = emp
  return (
    <div className="container container-fluid">
      <div className="card-body">
        <h3>Datos del empleado</h3>
        <p>Nombre:{nombre}</p>
        <p>Apellidos:{apellidos}</p>
        <p>Edad:{edad}</p>
        <p>Puesto:{puesto}</p>
      </div>
    </div>
  );
};

export default Empleados;
