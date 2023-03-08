import React, {useState} from "react";

//Componentes
import Formulario from "./formulario.jsx";
import Empleados from "./empleados.jsx";

const Home = () => {
  const [empleados, setEmpleado] = useState([]);

  const handleSubmit = (nuevoEmpleado) => {
    setEmpleado([...empleados, nuevoEmpleado]);
  };

  return (
    <>
      <div className="container">
        <Formulario handleSubmit={handleSubmit} />
      </div>
      <div className="content-users">
		{empleados.map((emp, index)=> <Empleados key={index} emp={emp} />)/* se mapea el array de usuarios con una key(index) y el usuario se le pasa como prop*/} 
	  </div>
    </>
  );
};

export default Home;
