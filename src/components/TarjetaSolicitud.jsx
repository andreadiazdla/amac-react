function TarjetaSolicitud() {
    return (
      <article className="tarjeta">
        <div className="tarjeta-contenido">
          <h2 className="tarjeta-titulo">
            Auxiliar Administrativo
          </h2>
          <p>Servicios Empresariales del Norte</p>
          <p>
            <strong>Fecha de aplicación:</strong>
            15/10/2026
          </p>
        </div>
        <div className="tarjeta-acciones">
          <span className="estado estado-rechazada">
            Rechazada
          </span>
        </div>
      </article>
    );
  }
  
  export default TarjetaSolicitud;