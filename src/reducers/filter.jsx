import { setAll, setCompleted, setActive } from "../actions/filtersList";
import { all, completed, active } from "./filtersList";

const filterReducer = (state = all, action) => {
  switch (action.type) {
    case setAll:
      return all;

    case setCompleted:
      return completed;

    case setActive:
      return active;

    default:
      return state;
  }
};

export default filterReducer;
