import { setAll, setCompleted, setActive } from "./filterStates";

export const SetAll = () => {
  return {
    type: setAll,
  };
};

export const SetCompleted = () => {
  return {
    type: setCompleted,
  };
};

export const SetActive = () => {
  return {
    type: setActive,
  };
};

export const Add = (text) => {
  return {
    type: "Add",
    payload: text,
  };
};

export const SetInputValue = (value) => {
  return {
    type: "SetInputValue",
    payload: value,
  };
};
