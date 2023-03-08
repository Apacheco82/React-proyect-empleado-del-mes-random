import React, {useState} from "react";
import Formulario from "./formulario.jsx";
import Empleados from "./empleados.jsx";

const Home = () => {
  const [empleados, setEmpleado] = useState([]);

  const handleSubmit = (nuevoEmpleado) =>{
    setEmpleado[{...empleados, nuevoEmpleado}]
  }
  

  return (
    <>
      <div className="container">
        <Formulario handleSubmit={handleSubmit}/>
		<button className="btn btn-warning">Empleado del mes</button>
      </div>
      ¡{empleados.map((emp, i) => <Empleados emp={emp} key={i}/> )}
     

    </>
  );
};

export default Home;
