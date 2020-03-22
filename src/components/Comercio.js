import React from "react";
import { Link, useHistory } from "react-router-dom";
import { obtenerDetalleComercioAction } from "../actions/comerciosActions";
import { useSelector, useDispatch } from "react-redux";

const Comercio = props => {
  //console.log(props.comercio);

  const dispatch = useDispatch();

  const history = useHistory(); //habilitar history para redireccion

  //funcion que redirige de forma programada
  const redireccionarComercioDetalle = comercio => {
    history.push(`/comercio/detalle/${comercio.id}`);
    dispatch(obtenerDetalleComercioAction(comercio));
  };

  return (
    <tr>
      <td data-label="Nombre">
        <button
          to={`/comercio/detalle/${props.comercio.id}`}
          className="btn"
          onClick={() => redireccionarComercioDetalle(props.comercio)}
        >
          {props.comercio.attributes.nombre}
        </button>
      </td>
      <th>{props.comercio.attributes.direccion}</th>
      <th>{props.comercio.attributes.usa_delivery === true ? "Si" : "NO"}</th>
      <th>telefono</th>
      <th>
        {props.comercio.attributes.usa_delivery_catamarca === true
          ? "Si"
          : "NO"}
      </th>
      <th>{props.comercio.attributes.usa_pedidos_ya === true ? "Si" : "NO"}</th>
    </tr>
  );
};

export default Comercio;
