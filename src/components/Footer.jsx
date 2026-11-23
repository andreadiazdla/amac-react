
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="pie" id="contacto">
      <div className="contenedor pie-contenido">

        <section>
          <h2 className="pie-titulo">AMAC</h2>
          <p className="pie-texto">
            Asociación de Mayores A.C. Bolsa de trabajo
            para personas mayores: buscando un cambio
            cultural para el buen envejecimiento.
          </p>
        </section>

        <nav aria-label="Secciones del pie de página">
          <h2 className="pie-titulo">Secciones</h2>

          <ul className="pie-lista">
            <li>
              <Link className="pie-enlace" to="/">
                Buscar empleos
              </Link>
            </li>

            <li>
              <Link
                className="pie-enlace"
                to="/mis-solicitudes"
              >
                Mis solicitudes
              </Link>
            </li>

            <li>
              <a className="pie-enlace" href="#">
                Mi perfil
              </a>
            </li>
          </ul>
        </nav>

        <section>
          <h2 className="pie-titulo">¿Necesitas ayuda?</h2>
          <p className="pie-texto">
            Llámanos y te ayudamos a usar la plataforma.
            Teléfono: 81 0000 0000
          </p>
        </section>

        <p className="pie-legal">
          <small>© 2026 AMAC · Asociación de Mayores A.C.</small>
        </p>

      </div>
    </footer>
  )
}

export default Footer
  