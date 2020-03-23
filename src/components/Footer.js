import React from "react";
import ministerio from "../img/ministerio_industria.jpeg";
import logoSecretaria from "../img/secretaria_modernizacion.jpeg";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <a
              className="navbar-brand"
              href="#"
              aria-label="Argentina.gob.ar Presidencia de la Nación"
            >
              <img className="image-responsive" alt="" src="" height="150" />
            </a>
            <img
              className="image-responsive"
              alt="Argentina.gob.ar - Presidencia de la Nación"
              src={ministerio}
              height="100"
            />
          </div>
          <div className="col-sm-6"></div>
          <div className="col-sm-6">
            <a
              className="navbar-brand"
              href="#"
              aria-label="Argentina.gob.ar Presidencia de la Nación"
            >
              <img className="image-responsive" alt="" src="" height="150" />
            </a>
            <img
              className="image-responsive"
              alt="Argentina.gob.ar - Presidencia de la Nación"
              src={logoSecretaria}
              height="100"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
