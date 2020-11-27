import filterReducer from "./filter";
import todosReducer from "./todos";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  filterReducer,
  todosReducer,
});

export default allReducers;
