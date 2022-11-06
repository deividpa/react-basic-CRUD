import React, { useState, useEffect } from "react";

export default function CrudForm() {
  // Se crea un objeto vacio para inicializar el state form
  const initialState = {
    name: "",
    constellation: "",
    id: null,
  };

  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {};
  const handleSubmit = (e) => {};
  const handleReset = (e) => {};

  return (
    <>
      <h3>Agregar:</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Ingresa nombre"
          onChange={handleChange}
          value={form.name}
        />
        <input
          type="text"
          name="constellation"
          placeholder="Ingresar Constellación:"
          onChange={handleChange}
          value={form.constellation}
        />
        <input type="submit" value="Insertar" />
        <input type="reset" value="Limpiar" onClick={handleReset} />
      </form>
    </>
  );
}
