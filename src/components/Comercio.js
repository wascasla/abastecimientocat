import React from "react";

const Comercio = props => {
  //console.log(props.comercio);
  return (
    <tr>
      <td data-label="Nombre">{props.comercio.attributes.nombre}</td>
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
