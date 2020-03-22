import {
  OBTENER_COMERCIOS,
  OBTENER_COMERCIOS_EXITO,
  OBTENER_COMERCIOS_ERROR,
  OBTENER_DETALLE_COMERCIO,
  OBTENER_DETALLE_COMERCIO_EXITO,
  OBTENER_DETALLE_COMERCIO_ERROR
} from "../types";

// cada reducer tiene su propio state
const initialState = {
  comercios: [],
  error: null,
  loading: false,
  comercio: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case OBTENER_DETALLE_COMERCIO:
    case OBTENER_COMERCIOS:
      return {
        ...state,
        loading: action.payload
      };
    case OBTENER_COMERCIOS_EXITO:
      return {
        ...state,
        loading: false,
        error: null,
        comercios: action.payload
      };
    case OBTENER_DETALLE_COMERCIO_ERROR:
    case OBTENER_COMERCIOS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case OBTENER_DETALLE_COMERCIO_EXITO:
      return {
        ...state,
        loading: false,
        error: null,
        comercio: action.payload
      };

    default:
      return state;
  }
}
