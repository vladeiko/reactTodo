import { setAll, setCompleted, setActive } from "./filtersList";
import {
  addTodoElement,
  setCheckValue,
  removeTodoElement,
  clearCompleted,
} from "./todosList";

const setInputValue = "SetInputValue";

export const SetInputValue = (value) => {
  return {
    type: setInputValue,
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
    type: addTodoElement,
    payload: text,
  };
};

export const DeleteTodoElement = (todo) => {
  return {
    type: removeTodoElement,
    payload: todo,
  };
};

export const SetCheckValue = (todo) => {
  return {
    type: setCheckValue,
    payload: todo,
  };
};

export const ClearCompleted = () => {
  return {
    type: clearCompleted,
  };
};
