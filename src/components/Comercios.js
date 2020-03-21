import React, { Fragment, useEffect } from "react";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { obtenerComerciosAction } from "../actions/comerciosActions";
import Comercio from "./Comercio";

const Comercios = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //consultar la api
    const cargarComercios = () => dispatch(obtenerComerciosAction());
    cargarComercios();
  }, []);

  //obtener el state
  const comercios = useSelector(state => state.comercios.comercios);
  console.log(comercios);

  return (
    <Fragment>
      <section>
        <article className="container content_format">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel-pane pane-titulo">
              <div className="pane-content">
                <h1 className="activities-sidbar">
                  Listado de Comercios para abastecimiento
                </h1>
              </div>
            </div>
            <div className="panel-separator"></div>
            <div className="panel-pane pane-entity-field pane-node-body">
              <div className="pane-content">
                <div className="field field-name-body field-type-text-with-summary field-label-hidden">
                  <div className="field-items">
                    <div
                      className="field-item even"
                      property="content:encoded"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="panel-separator"></div>
            <div className="panel-pane pane-redes-sociales">
              <div className="pane-content">
                <div className="section-actions social-share">
                  <p>Compartir en redes sociales</p>
                  <div className="item-list">
                    <ul className="list-inline">
                      <li className="first">
                        <a
                          href="http://www.facebook.com/sharer/sharer.php?u=https://www.argentina.gob.ar/precios-cuidados/listado-de-productos&amp;title=Listado de productos de Precios Cuidados"
                          target="_blank"
                        >
                          <span className="sr-only">Compartir en Facebook</span>
                          <i className="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://twitter.com/share?url=https://www.argentina.gob.ar/precios-cuidados/listado-de-productos&amp;text=Listado de productos de Precios Cuidados"
                          target="_blank"
                        >
                          <span className="sr-only">Compartir en Twitter</span>
                          <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https://www.argentina.gob.ar/precios-cuidados/listado-de-productos"
                          target="_blank"
                        >
                          <span className="sr-only">Compartir en Linkedin</span>
                          <i className="fa fa-linkedin" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li className="last">
                        <a
                          href="https://web.whatsapp.com/send?text=https://www.argentina.gob.ar/precios-cuidados/listado-de-productos"
                          target="_blank"
                        >
                          <span className="sr-only">Compartir en Whatsapp</span>
                          <i className="fa fa-whatsapp" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="panel-separator"></div>
            <div className="panel-pane pane-separador">
              <div className="pane-content">
                <hr></hr>
              </div>
            </div>
            <div className="panel-separator"></div>
            <div className="panel-pane pane-entity-field pane-node-body">
              <div className="pane-content">
                <div className="field field-name-body field-type-text-with-summary field-label-hidden">
                  <div className="field-items">
                    <div className="field-item even" property="content:encoded">
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
                      <div className="col-sm-12">
                        <table className="table table-responsive-poncho">
                          <thead>
                            <tr>
                                  <th>Nombre</th>
                                  <th>Rubro</th>
                                  <th>Dirección</th>
                                  <th>Localidad</th>
                                  <th>Delivery</th>
                                  <th>Telefono</th>
                                  <th>DeliveryCatamarca</th>
                                 <th>PedidosYa</th>
                            </tr>
                          </thead>
                          <tbody>
                             
                            {comercios.length === 0
                              ? "No hay Comercios"
                              : comercios.map(comercio => (
                                  <Comercio comercio />
                                ))}
                          </tbody>
                        </table>
                      </div>
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
