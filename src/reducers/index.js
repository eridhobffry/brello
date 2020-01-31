import { combineReducers } from "redux";
import listReducer from "./lists_reducer";
import { formOpenCardReducer } from "./form_open_card";

export default combineReducers({
  lists: listReducer,
  formOpen: formOpenCardReducer
});
