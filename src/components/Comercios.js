import React, { Fragment, useState, useEffect, forwardRef } from "react";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { obtenerComerciosAction } from "../actions/comerciosActions";
import Comercio from "./Comercio";
import axios from "axios";
import MaterialTable from "material-table";
import {
  AddBox,
  ArrowDownward,
  Check,
  ChevronLeft,
  ChevronRight,
  Clear,
  DeleteOutline,
  Edit,
  FilterList,
  FirstPage,
  LastPage,
  Remove,
  SaveAlt,
  Search,
  ViewColumn
} from "@material-ui/icons";

const Comercios = () => {
  const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => (
      <ChevronRight {...props} ref={ref} />
    )),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
      <ChevronLeft {...props} ref={ref} />
    )),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => (
      <ArrowDownward {...props} ref={ref} />
    )),
    ThirdStateCheck: forwardRef((props, ref) => (
      <Remove {...props} ref={ref} />
    )),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };

  const [rubros, setRubros] = useState([]);

  const [localidades, setLocalidades] = useState([]);

  //const [delivery, setDelivery] = useState(0);

  const [busqueda, guardarBusqueda] = useState({
    nombre: "",
    rubroid: 0,
    ubicacionid: 0,
    delivery: 2
  });

  const { nombre, rubroid, ubicacionid, delivery } = busqueda;

  //funcion a cada input para leer su contenido
  const actualizarStateBusqueda = e => {
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value
    });
  };

  const [rubroSeleccionado, setrubroSeleccionado] = useState();
  const [ubicacionSeleccionada, setubicacionSeleccionada] = useState();
  //const [nombre, setNombre] = useState();

  const consultarRubros = async () => {
    const url = `https://emergencia-sanitaria.catamarca.gob.ar/api/v1/comercio/rubros_asignados/`;
    const resultado = await axios(url);
    setRubros(resultado.data);
    //console.log(resultado.data);
  };

  const consultarLocalidades = async () => {
    const url = `https://emergencia-sanitaria.catamarca.gob.ar/api/v1/comercio/ubicaciones_asignadas/`;
    const resultado = await axios(url);
    setLocalidades(resultado.data);
    console.log(resultado.data);
  };

  //rubros y ubicaciones
  useEffect(() => {
    //consultar la api
    //const cargarComercios = () => dispatch(obtenerComerciosAction());

    consultarLocalidades();
  }, []);

  useEffect(() => {
    //consultar la api
    //const cargarComercios = () => dispatch(obtenerComerciosAction());
    consultarRubros();
  }, []);

  const dispatch = useDispatch();

  useEffect(() => {
    //consultar la api
    const cargarComercios = () => dispatch(obtenerComerciosAction());
    //cargarComercios();
  }, [busqueda]);

  //obtener el state
  const comercios = useSelector(state => state.comercios.comercios);
  //console.log(comercios);

  // consultar api de comercios
  const buscarInformacion = e => {
    e.preventDefault();
    const cargarComercios = () => dispatch(obtenerComerciosAction(busqueda));
    cargarComercios();
  };

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
                  <form onSubmit={buscarInformacion}>
                    <div className="col-sm-12 col-md-8">
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label>Localidad</label>
                            <select
                              name="ubicacionid"
                              className="form-control"
                              value={ubicacionSeleccionada}
                              onChange={actualizarStateBusqueda}
                            >
                              <option value="0">Todos</option>
                              {localidades.map(localidad => (
                                <option value={localidad.ubicacion_id}>
                                  {localidad.ubicacion_nombre}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label>Rubro</label>
                            <select
                              name="rubroid"
                              className="form-control"
                              value={rubroSeleccionado}
                              onChange={actualizarStateBusqueda}
                            >
                              <option value="0">Todos</option>
                              {rubros.map(rubro => (
                                <option value={rubro.rubro_id}>
                                  {rubro.rubro_nombre}
                                </option>
                              ))}
                            </select>
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
                          value={nombre}
                          onChange={actualizarStateBusqueda}
                        ></input>
                      </div>
                      <div className="form-group">
                        <label>Delivery</label>
                        <select
                          name="delivery"
                          className="form-control"
                          value={delivery}
                          onChange={actualizarStateBusqueda}
                        >
                          <option value="2">Todos</option>
                          <option value="1">Si</option>
                          <option value="0">NO</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <button className="btn btn-default" type="submit">
                          Filtrar
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                {/*aqui va la tabla de los comercios*/}
                <div className="row">
                  <div className="col-md-12 m-b-4">
                    <div className="row">
                      <div className="col-sm-12">{/*cantidad registros*/}</div>
                    </div>
                    <div className="row">
                      {comercios.length !== 0 ? (
                        <div className="col-sm-12">
                          <div className="table-responsive">
                            <table
                              id="example"
                              className="table table-bordered"
                            >
                              <thead>
                                <tr>
                                  <th>Nombre</th>
                                  <th>Dirección</th>
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
                                      <Comercio
                                        key={comercio.attributes.id}
                                        comercio={comercio}
                                      />
                                    ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
                {/*otra tabla*/}
                <div className="row">
                  <div style={{ maxWidth: "100%" }}>
                    <MaterialTable
                      icons={tableIcons}
                      columns={[
                        { title: "Adı", field: "name" },
                        { title: "Soyadı", field: "surname" },
                        {
                          title: "Doğum Yılı",
                          field: "birthYear",
                          type: "numeric"
                        },
                        {
                          title: "Doğum Yeri",
                          field: "birthCity",
                          lookup: { 34: "İstanbul", 63: "Şanlıurfa" }
                        }
                      ]}
                      data={[
                        {
                          name: "Mehmet",
                          surname: "Baran",
                          birthYear: 1987,
                          birthCity: 63
                        },
                        {
                          name: "hola",
                          surname: "hola",
                          birthYear: 1987,
                          birthCity: 63
                        }
                      ]}
                      title="Comercios"
                    />
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
