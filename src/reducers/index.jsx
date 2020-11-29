import filterReducer from "./filter";
import todosReducer from "./todos";
import inputReducer from "./input";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  filterReducer,
  todosReducer,
  inputReducer,
});

export default allReducers;
