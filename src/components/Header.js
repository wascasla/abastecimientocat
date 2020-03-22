import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-top navbar-default" role="navigation">
        <div className="container">
          <div>
            <div className="navbar-header">
              <Link
                className="navbar-brand"
                to={`/`}
                aria-label="Argentina.gob.ar Presidencia de la Nación"
              >
                <h5>LISTADO DE COMERCIOS</h5>
              </Link>
              <a
                href="https://mi.argentina.gob.ar/"
                className="btn btn-login btn-link visible-xs"
                aria-label="Ingresar a Mi Argentina"
              >
                <i className="icono-arg-mi-argentina"></i>
              </a>
            </div>
            {/*formularo de busqueda y tabla
            <a
              href="https://mi.argentina.gob.ar/"
              className="btn btn-login btn-link hidden-xs"
              aria-label="Ingresar a Mi Argentina"
            >
              <i className="icono-arg-mi-argentina"></i>Mi Argentina
            </a>*/}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
