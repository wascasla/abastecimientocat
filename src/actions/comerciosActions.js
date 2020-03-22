import {
  OBTENER_COMERCIOS,
  OBTENER_COMERCIOS_EXITO,
  OBTENER_COMERCIOS_ERROR,
  OBTENER_DETALLE_COMERCIO,
  OBTENER_DETALLE_COMERCIO_EXITO,
  OBTENER_DETALLE_COMERCIO_ERROR
} from "../types";

import axios from "axios";
const urlBase = `https://emergencia-sanitaria.catamarca.gob.ar/api/v1/comercio/`;
const rubro = "";
const ubicacion = "";
const nombre = "";
const delivery = "";
//const urlGeneral = {`https://emergencia-sanitaria.catamarca.gob.ar/api/v1/comercio/?nombre=${nombre}&rubro=&rubro_id=&localidad=&localidad_id=&usa_delivery=`};

const urlDetalleComercio = `https://emergencia-sanitaria.catamarca.gob.ar/api/v1/comercio/`;
let url = "";

//funciones que utiliza la vista

//funcion que descarga los productos d ela base de datos
export function obtenerComerciosAction(datos) {
  return async dispatch => {
    dispatch(descargarProductos());

    //const urlDelivery = urlBase + `?usa_delivery=true`;

    if (datos.nombre.lenght !== 0) {
      //con delivery
      url = urlBase + `?nombre=${datos.nombre}`;
    } else {
      url = urlBase + `?nombre=`;
    }

    if (Number(datos.rubroid) !== 0) {
      //con rubro
      url = url + `&rubro=&rubro_id=${datos.rubroid}`;
    } else {
      url = url + `&rubro=&rubro_id=`;
    }

    if (Number(datos.ubicacionid) !== 0) {
      //con localidad
      url = url + `&localidad=&localidad_id=${datos.ubicacionid}`;
    } else {
      url = url + `&localidad=&localidad_id=`;
    }

    if (Number(datos.delivery) === 1) {
      //con delivery
      url = url + `&usa_delivery=true`;
    }
    if (Number(datos.delivery) === 0) {
      //con delivery
      url = url + `&usa_delivery=false`;
    }
    if (Number(datos.delivery) === 2) {
      //todos
      url = url + `&usa_delivery=`;
    }

    console.log(url);

    try {
      const respuesta = await axios.get(url);

      //console.log(respuesta.data.data);
      const parse = respuesta.data;
      //console.log(parse);
      dispatch(descargaComerciosExitosa(respuesta.data.data));
    } catch (error) {
      dispatch(descargaComerciosError());
    }
  };
}

const descargarProductos = () => ({
  type: OBTENER_COMERCIOS,
  payload: true
});

const descargaComerciosExitosa = comercios => ({
  type: OBTENER_COMERCIOS_EXITO,
  payload: comercios
});

const descargaComerciosError = () => ({
  type: OBTENER_COMERCIOS_ERROR,
  payload: true
});

//funcion que busca un comercio en la api
export function obtenerDetalleComercioAction(comercio) {
  return async dispatch => {
    dispatch(descargaDetalleComercioExitosa(comercio));

    /*const urlDelivery = urlBase + `?usa_delivery=true`;

    try {
      const respuesta = await axios.get(urlDetalleComercio + id);

      //console.log(respuesta.data.data);
      const parse = respuesta.data;
      console.log(parse);
      dispatch(descargaComerciosExitosa(respuesta.data.data));
    } catch (error) {
      dispatch(descargaComerciosError());
    }*/
  };
}

const descargarDetalleComercio = () => ({
  type: OBTENER_DETALLE_COMERCIO,
  payload: true
});

const descargaDetalleComercioExitosa = comercio => ({
  type: OBTENER_DETALLE_COMERCIO_EXITO,
  payload: comercio
});

const descargaDetalleComercioError = () => ({
  type: OBTENER_DETALLE_COMERCIO_ERROR,
  payload: true
});
