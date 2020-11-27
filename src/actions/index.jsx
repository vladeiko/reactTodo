import { all, completed, active } from "./filterStates";

export const SetAll = () => {
  return {
    type: "SetAll",
  };
};

export const SetCompleted = () => {
  return {
    type: "SetCompleted",
  };
};

export const SetActive = () => {
  return {
    type: "SetActive",
  };
};
