import React, { Fragment, useState, useEffect } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
//import { Icon } from "leaflet";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { obtenerDetalleComercioAction } from "../actions/comerciosActions";

const ComercioDetalle = () => {
  // comercio con datos
  const comercio = useSelector(state => state.comercios.comercio);
  console.log(comercio);

  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <h1>Información detallada del Comercio</h1>
          <h2>{comercio.attributes.nombre}</h2>
          <h4>Descripcion:</h4>
          <h5> {comercio.attributes.descripcion}</h5>

          <h4>Dirección: {comercio.attributes.direccion}</h4>
          <h4>Horario Atención: {comercio.attributes.horario_atencion}</h4>
          <h4>Delivery: {comercio.attributes.usa_delivery ? "Si" : "NO"}</h4>
          <h4>
            Delivery Catamarca:{" "}
            {comercio.attributes.usa_delivery_catamarca ? "Si" : "NO"}
          </h4>
          <h4>
            Pedidos Ya: {comercio.attributes.usa_pedidos_ya ? "Si" : "NO"}
          </h4>
        </div>

        <div className="row">
          <h3>Mapa</h3>
          <Map
            center={[
              comercio.attributes.punto_geografico.coordinates[1],
              comercio.attributes.punto_geografico.coordinates[0]
            ]}
            zoom={15}
            style={{ width: "100%", height: "550px" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker
              key={comercio.id}
              position={[
                comercio.attributes.punto_geografico.coordinates[1],
                comercio.attributes.punto_geografico.coordinates[0]
              ]}
            />
          </Map>
        </div>
      </div>
    </Fragment>
  );
};

export default ComercioDetalle;
