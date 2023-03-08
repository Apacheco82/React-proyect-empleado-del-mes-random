import React, {useState} from "react";

const initialState = {
  //se crea aquí el objeto vacío porque solo lo vamos a usar en form
  nombre: "",
  apellidos: "",
  edad: "",
  puesto: "",
};

const Formulario = ({handleSubmit}) => {
  const [empleado, setEmpleado] = useState(initialState);

  const handleChange = (e) => {
    const value = e.target.value //se obtiene el valor del input
    const name = e.target.name //se obtiene el nombre del campo del input
    setEmpleado({...empleado, [name]: value}) //se añade el valor al campo de nombre de input haciendo una copia del objeto
  };

  const handleData = (e) => {
    e.preventDefault();
    console.log(empleado)
    handleSubmit(empleado);
    setEmpleado(initialState);
  };

  return (
    <>
      <form onChange={handleChange} onSubmit={handleData}>
        <h3>Añade un empleado</h3>
        <input type="text" name="nombre" value={empleado.nombre}></input>
        <input type="text" name="apellidos" value={empleado.apellidos}></input>
        <input type="text" name="edad" value={empleado.edad}></input>
        <input type="text" name="puesto" value={empleado.puesto}></input>
        <input type="submit" className="btn btn-success" value="Save"></input>
      </form>
    </>
  );
};

export default Formulario;
