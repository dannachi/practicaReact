import React from "react";
import "./Layout.css"; // Importamos los estilos
import { useState, useEffect, useRef} from "react";

const saludo = "Hola Daniel, sos el más grande desarrollador frontEnd que jamas haya existido, alto capo!";
const nombre = "Daniel Rodriguez Sanchez"
const frutas = ["Manzana", "Banano", "Pera", "Guanabana", "Cereza", "Mango"]
//const tareas = ["Revisar correos", "Automatizar tareas", "Realizar refinamiento de proyecto","Asistir a obra de teatro", "Correr una maraton"]

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
/*
function ListaTareas(){
  return(
    <ul>
      {tareas.map((tareas, index) =>(
        <li key={index}>{tareas}</li>
      ))}

    </ul>
  )
}
*/

function Evento(){
  const darClick = () => {
    alert("¡El que lo lea es gay!");
  };
  return <button onClick={darClick}>Haz clic</button>

}

function Reloj(){
  const [hora, setHora] = useState(new Date());

  useState(() => {
    const intervalo = setInterval(() => {
      setHora(new Date());
    }, 1000);
  
    return () => clearInterval(intervalo);

  }, []);

  return <p>Hora actual: {hora.toLocaleDateString()}</p>
  
}

function ListaTareas(){
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);
  const inputRef = useRef();

  const agregarTarea = () => {
    if (tarea.trim() === "") return;
    setTareas([...tareas, tarea]);
    setTarea("");
    inputRef.current.focus();
  };

  const borrarTarea = (indice)=>{
    const nuevasTareas = tareas.filter((_, i) => i !== indice);
    setTareas(nuevasTareas);
  }


  return(
    <div style={{padding:"20px", maxWidth: "400px",margin: "auto"}}>
      <h2>Lista de tareas</h2>
      <input
        ref={inputRef}
        type="text"
        value={tarea}
        onChange={(e)=> setTarea(e.target.value)}
        placeholder="Escriba una tarea"
        style={{width:"100%", padding:"8px"}}
      />
      <button onClick={agregarTarea} style={{margin:"10px", padding:"8px 16px"}}>
        Agregar
      </button>

      <ul style={{marginTop:"20px", listStyle:"none", padding: 0}}>
        {tareas.map((t,i)=>(
          <li key={i} style={{display:"flex", justifyContent:"space-between",alignItems:"center", marginBottom:"8px"}}>
            {t}
            <button onClick={()=> borrarTarea(i)} style={{marginLeft:"10px", background:"white",border:"none",padding:"4px 8px", cursor:"pointer"}}>
              ❌
            </button>
          </li>
        ))}

      </ul>

    </div>
  )

}

export default function App(){
  return <ListaTareas />;
}
