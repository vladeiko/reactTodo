export { all, completed, active } from "../actions/filterStates";

const filterReducer = (state = "All", action) => {
  switch (action.type) {
    case "SetAll":
      return "All";

    case "SetCompleted":
      return "Completed";

    case "SetActive":
      return "Active";

    default:
      return "All";
  }
};

export default filterReducer;
