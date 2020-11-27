import { all, completed, active } from "./filterStates";

export const SetAll = () => {
  return {
    type: all,
  };
};

export const SetCompleted = () => {
  return {
    type: completed,
  };
};

export const SetActive = () => {
  return {
    type: active,
  };
};
