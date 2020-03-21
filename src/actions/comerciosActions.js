import {
  OBTENER_COMERCIOS,
  OBTENER_COMERCIOS_EXITO,
  OBTENER_COMERCIOS_ERROR
} from "../types";

import axios from "axios";

//funciones que utiliza la vista

//funcion que descarga los productos d ela base de datos
export function obtenerComerciosAction() {
  return async dispatch => {
    dispatch(descargarProductos());

    const url = `https://emergencia-sanitaria.catamarca.gob.ar/api/v1/comercio/`;

    try {
      const respuesta = await axios(url);
      console.log(respuesta.data.data);
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
