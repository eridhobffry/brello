import { combineReducers } from "redux";
import listReducer from "./lists_reducer";

export default combineReducers({
  lists: listReducer
});
