import React, { Fragment } from "react";

const Comercios = () => {
  return (
    <Fragment>
      <section>
        <article class="container content_format">
          <div class="col-md-8 col-md-offset-2">
            <div class="panel-pane pane-titulo">
              <div class="pane-content">
                <h1 class="activities-sidbar">
                  Listado de Comercios para abastecimiento
                </h1>
              </div>
            </div>
            <div class="panel-separator"></div>
            <div class="panel-pane pane-entity-field pane-node-body">
              <div class="pane-content">
                <div class="field field-name-body field-type-text-with-summary field-label-hidden">
                  <div class="field-items">
                    <div
                      class="field-item even"
                      property="content:encoded"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="panel-separator"></div>
            <div class="panel-pane pane-redes-sociales">
              <div class="pane-content">
                <div class="section-actions social-share">
                  <p>Compartir en redes sociales</p>
                  <div class="item-list">
                    <ul class="list-inline">
                      <li class="first">
                        <a
                          href="http://www.facebook.com/sharer/sharer.php?u=https://www.argentina.gob.ar/precios-cuidados/listado-de-productos&amp;title=Listado de productos de Precios Cuidados"
                          target="_blank"
                        >
                          <span class="sr-only">Compartir en Facebook</span>
                          <i class="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://twitter.com/share?url=https://www.argentina.gob.ar/precios-cuidados/listado-de-productos&amp;text=Listado de productos de Precios Cuidados"
                          target="_blank"
                        >
                          <span class="sr-only">Compartir en Twitter</span>
                          <i class="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https://www.argentina.gob.ar/precios-cuidados/listado-de-productos"
                          target="_blank"
                        >
                          <span class="sr-only">Compartir en Linkedin</span>
                          <i class="fa fa-linkedin" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li class="last">
                        <a
                          href="https://web.whatsapp.com/send?text=https://www.argentina.gob.ar/precios-cuidados/listado-de-productos"
                          target="_blank"
                        >
                          <span class="sr-only">Compartir en Whatsapp</span>
                          <i class="fa fa-whatsapp" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="panel-separator"></div>
            <div class="panel-pane pane-separador">
              <div class="pane-content">
                <hr></hr>
              </div>
            </div>
            <div class="panel-separator"></div>
            <div class="panel-pane pane-entity-field pane-node-body">
              <div class="pane-content">
                <div class="field field-name-body field-type-text-with-summary field-label-hidden">
                  <div class="field-items">
                    <div class="field-item even" property="content:encoded">
                      <h5>Conocé los comercios para hacer tus compras</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>

      {/*formularo de busqueda y tabla*/}
      <section>
        <div className="container">
          <div className="panel-pane pane-texto">
            <div className="pane-content">
              <div className="container">
                <div className="row">
                  <form>
                    <div className="col-sm-12 col-md-8">
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label>Localidad</label>
                            <select className="form-control"></select>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label>Rubro</label>
                            <select className="form-control"></select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-4">
                      <div className="form-group">
                        <label>Buscá por nombre</label>
                        <input
                          type="text"
                          className="form-control"
                          name="nombre"
                        ></input>
                      </div>
                    </div>
                  </form>
                </div>
                {/*aqui va la tabla de los comercios*/}
                <div className="row">
                  <div className="col-md-12 m-b-4">
                    <div className="row">
                      <div className="col-sm-12">cantidad registros</div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">tabla</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Comercios;
