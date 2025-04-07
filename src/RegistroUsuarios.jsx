import React from "react";
import { useState, useEffect, useRef} from "react";

function RegistroUsuarios(){
    const [usuarios, setUsuarios] = useState([]);
    const [formulario, setFormulario] = useState({nombre:"", email:"", edad:""});
    const [error, setError] = useState(""); 
  
    const manejarCambio = (e) => {
        const { name, value } = e.target;
        setFormulario({ ...formulario, [name]: value });
      };


    const manejarEnvio = (e) =>{
    e.preventDefault();
  
  
    const{nombre, email, edad} = formulario;

    if(!nombre.trim() || !email.trim() || !edad.trim()){
        setError("Por favor completa todos los campos.");
        return;
    }

    const nuevoUsuario = { nombre, email, edad};
    setUsuarios([...usuarios, nuevoUsuario]);
    setFormulario({nombre:"", email:"", edad:""});
    setError("");
  };

  const eliminarUsuario = (indice) => {
    const nuevaLista = usuarios.filter((_, i) => i !== indice);
    setUsuarios(nuevaLista);
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto", padding: "20px" }}>
      <h2>Registro de Usuarios</h2>
      <form onSubmit={manejarEnvio}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={formulario.nombre}
          onChange={manejarCambio}
          style={{ display: "block", marginBottom: "10px", width: "100%" }}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formulario.email}
          onChange={manejarCambio}
          style={{ display: "block", marginBottom: "10px", width: "100%" }}
        />
        <input
          type="number"
          name="edad"
          placeholder="Edad"
          value={formulario.edad}
          onChange={manejarCambio}
          style={{ display: "block", marginBottom: "10px", width: "100%" }}
        />
        <button type="submit">Agregar Usuario</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <h3 style={{ marginTop: "30px" }}>Usuarios Registrados:</h3>
      <ul>
        {usuarios.map((usuario, index) => (
          <li key={index}>
            {usuario.nombre} ({usuario.edad} años) - {usuario.email}
            <button
              onClick={() => eliminarUsuario(index)}
              style={{ marginLeft: "10px", color: "red" }}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
  
}

export default RegistroUsuarios;
