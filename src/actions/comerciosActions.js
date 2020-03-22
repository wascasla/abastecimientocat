import {
  OBTENER_COMERCIOS,
  OBTENER_COMERCIOS_EXITO,
  OBTENER_COMERCIOS_ERROR
} from "../types";

import axios from "axios";
const urlBase = `https://emergencia-sanitaria.catamarca.gob.ar/api/v1/comercio/`;
let url = "";

//funciones que utiliza la vista

//funcion que descarga los productos d ela base de datos
export function obtenerComerciosAction(datos) {
  return async dispatch => {
    dispatch(descargarProductos());

    const urlDelivery = urlBase + `?usa_delivery=true`;

    if (datos.delivery === 1) {
      url = urlBase + `?usa_delivery=true`;
    } else {
      url = urlBase;
    }

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
