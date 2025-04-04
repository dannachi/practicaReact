import React from "react";
import "./Layout.css"; // Importamos los estilos
import { useState} from "react";

const saludo = "Hola Daniel, sos el más grande desarrollador frontEnd que jamas haya existido, alto capo!";
const nombre = "Daniel Rodriguez Sanchez"
const frutas = ["Manzana", "Banano", "Pera", "Guanabana", "Cereza", "Mango"]
const tareas = ["Revisar correos", "Automatizar tareas", "Realizar refinamiento de proyecto","Asistir a obra de teatro", "Correr una maraton"]

function Usuario() {
  return <h1>{nombre}</h1>; // Se usa { } para insertar JS dentro de JSX
}

function Producto(props){
  return <p>Hola, el {props.nombre} vale {props.precio} la libra!</p>
}

function Contador(){
  const [contador, setContador]= useState(0);
  const [descontador, setDescontador] = useState(0);

  return(
    <>
      <div>
          <p>Contador:{contador}</p>
          <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      </div>
      <div>
          <p>Descontador:{descontador}</p>
          <button onClick={() => setDescontador(descontador -1)}>Decrementar</button>
      </div>
    </>
  )
}

function Mensaje({ usuario }){
  return <p>{usuario ? "Bienvenido" : "Inicia sesión"}</p>
}

function ListaFrutas(){
  return(
    <ul>
      {frutas.map((fruta, index) =>(
        <li key={index}> {fruta} </li>
      ))}
    </ul>
  )
}

function ListaTareas(){
  return(
    <ul>
      {tareas.map((tareas, index) =>(
        <li key={index}>{tareas}</li>
      ))}

    </ul>
  )
}

function Evento(){
  const darClick = () => {
    alert("¡El que lo lea es gay!");
  };
  return <button onClick={darClick}>Haz clic</button>

}

export default function App(){
  return <Evento />;
}
