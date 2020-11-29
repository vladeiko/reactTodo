import { setAll, setCompleted, setActive } from "../actions/filterStates";
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
      return all;
  }
};

export default filterReducer;
