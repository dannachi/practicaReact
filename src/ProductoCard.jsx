import React from "react";
import "./Layout.css"; // Importamos los estilos
import { useState, useEffect, useRef} from "react";


function ProductoCard({nombre, precio, onAgregar}){
    return(
        <div style={{ border: "1px solid #ddd", padding: "10px", marginBottom: "10px", background:"grey" }}>
            <h4>{nombre}</h4>
            <p>${precio}</p>
            <button onClick={onAgregar}>Agregar al carrito</button>
        </div>

    );
}

export default ProductoCard;