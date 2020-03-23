import React from "react";
import { Link } from "react-router-dom";
import ministerio from "../img/ministerio_industria.jpeg";

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
                <img
                  className="image-responsive"
                  alt="Argentina.gob.ar - Presidencia de la Nación"
                  src={ministerio}
                  height="60"
                />
              </Link>
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
