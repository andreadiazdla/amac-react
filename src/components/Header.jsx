
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false)

  return (
    <>
      <a className="saltar-contenido" href="#principal">
        Saltar al contenido
      </a>

      <header className="header">
        <div className="barra">

          <a
            href="tel:+528100000000"
            className="btn btn-contacto"
            aria-label="Contáctanos"
          >
            <img
              className="icono"
              src="/img/icono-contacto.png"
              alt=""
            />
            <span className="texto-contacto">
              Contáctanos
            </span>
          </a>

          <Link to="/" className="logo">
            <picture>
              <source
                media="(min-width: 48rem)"
                srcSet="/img/logo-amac.png"
              />
              <img src="/img/logo-movil.png" alt="AMAC" />
            </picture>
          </Link>

          <button
            className="hamburguesa"
            type="button"
            aria-label={menuAbierto ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuAbierto}
            aria-controls="menu"
            onClick={() => setMenuAbierto(!menuAbierto)}
          >
            ☰
          </button>
        </div>

        <nav
          className={`menu ${menuAbierto ? 'abierto' : ''}`}
          id="menu"
          aria-label="Navegación principal"
        >
          <NavLink to="/" onClick={() => setMenuAbierto(false)}>
            Buscar empleos
          </NavLink>

          <NavLink
            to="/mis-solicitudes"
            onClick={() => setMenuAbierto(false)}
          >
            Mis solicitudes
          </NavLink>

          <a href="#">Mi perfil</a>
        </nav>
      </header>
    </>
  )
}

export default Header
  