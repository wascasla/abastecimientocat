import { combineReducers } from "redux";
import comerciosReducer from "./comerciosReducer";

export default combineReducers({
  comercios: comerciosReducer
});
