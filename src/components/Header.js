import React from "react";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-top navbar-default" role="navigation">
        <div className="container">
          <div>
            <div className="navbar-header">
              <a
                className="navbar-brand"
                href="#"
                aria-label="Argentina.gob.ar Presidencia de la Nación"
              >
                <img
                  alt="Argentina.gob.ar"
                  src="img/argentinagob.svg"
                  height="50"
                />
              </a>
              <a
                href="https://mi.argentina.gob.ar/"
                className="btn btn-login btn-link visible-xs"
                aria-label="Ingresar a Mi Argentina"
              >
                <i class="icono-arg-mi-argentina"></i>
              </a>
            </div>
            <a
              href="https://mi.argentina.gob.ar/"
              className="btn btn-login btn-link hidden-xs"
              aria-label="Ingresar a Mi Argentina"
            >
              <i className="icono-arg-mi-argentina"></i>Mi Argentina
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
