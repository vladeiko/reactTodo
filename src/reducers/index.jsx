import filterReducer from "./filter";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  filterReducer,
});

export default allReducers;
