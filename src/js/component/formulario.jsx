import React from "react";

const Formulario = () => {
  return (
    <>
      <div className="form"></div>
      <h3>Añade un empleado</h3>
      <input
        className="form-control"
        type="text"
        placeholder="Default input"
      ></input>
      <input
        className="form-control"
        type="text"
        placeholder="Default input"
      ></input>
      <input
        className="form-control"
        type="text"
        placeholder="Default input"
      ></input>
      <input
        className="form-control"
        type="text"
        placeholder="Default input"
      ></input>

      <button type="button" className="btn btn-success">
        Success
      </button>
    </>
  );
};

export default Formulario;
