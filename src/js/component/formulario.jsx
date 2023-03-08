import React, {useState} from "react";

const initialState = { //se crea aquí el objeto vacío porque solo lo vamos a usar en form
  nombre: "",
  apellidos: "",
  edad: "",
  puesto: "",
};

const Formulario = ({handleSubmit}) => {
  
  const [empleado, setEmpleado] = useState([initialState]);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    const inputName = e.target.name;
    setEmpleado[{...empleado, [inputName]: inputValue}];
    console.log(empleado)
  };

  const handleData = (e) => {
    e.preventDefault();
    handleSubmit(empleado);
    setEmpleado(initialState);
  };

  return (
    <>
      <form className="form" onChange={handleChange} onSubmit={handleData}>
        <h3>Añade un empleado</h3>
        <input
          className="form-control"
          type="text"
          name="nombre"
          value={empleado.nombre}
          placeholder="Default input"
        ></input>
        <input
          className="form-control"
          type="text"
          name="apellido"
          value={empleado.apellidos}
          placeholder="Default input"
        ></input>
        <input
          className="form-control"
          type="text"
          name="edad"
          value={empleado.edad}
          placeholder="Default input"
        ></input>
        <input
          className="form-control"
          type="text"
          name="puesto"
          value={empleado.puesto}
          placeholder="Default input"
        ></input>
        <input type="submit" className="btn btn-success" value="save"></input>
      </form>
    </>
  );
};

export default Formulario;
