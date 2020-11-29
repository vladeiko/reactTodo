import { setAll, setCompleted, setActive } from "./filterStates";

export const SetInputValue = (value) => {
  return {
    type: "SetInputValue",
    payload: value,
  };
};

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

export const AddTodoElement = (text) => {
  return {
    type: "AddTodoElement",
    payload: text,
  };
};

export const DeleteTodoElement = (todo) => {
  return {
    type: "RemoveTodoElement",
    payload: todo,
  };
};

export const SetCheckValue = (todo) => {
  return {
    type: "SetCheckValue",
    payload: todo,
  };
};

export const ClearCompleted = () => {
  return {
    type: "ClearCompleted",
  };
};
