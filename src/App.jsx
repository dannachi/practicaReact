import React from "react";
import "./Layout.css"; // Importamos los estilos

export default function Layout() {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">Título de la aplicación</header>

      <div className="content-wrapper">
        {/* Contenido principal */}
        <main className="main-content">
          <div className="box">Elemento 1</div>
          <div className="box">Elemento 2</div>
          <div className="box">Elemento 3</div>
        </main>

        {/* Sidebar (barra lateral) */}
        <aside className="sidebar">Menú lateral</aside>
      </div>
    </div>
  );
}
