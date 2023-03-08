import React, {useState} from "react";
import Formulario from "./formulario.jsx";
import Empleados from "./empleados.jsx";

const Home = () => {
  const [empleado, setEmpleado] = useState([]);
  return (
    <>
      <div className="container">
        <Formulario />
		<button className="btn btn-warning">Empleado del mes</button>
      </div>
      <Empleados />
      <Empleados />
      <Empleados />

    </>
  );
};

export default Home;
