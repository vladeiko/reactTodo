import React from "react";
import { useDispatch } from "react-redux";
import { AddTodoElement, SetInputValue } from "./actions";
import { useSelector } from "react-redux";

const AddTodo = () => {
  const inputValue = useSelector((state) => state.inputReducer);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(SetInputValue(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodoElement(inputValue));
    dispatch(SetInputValue(""));
  };

  return (
    <form className="main-form" onSubmit={handleSubmit}>
      <input
        className="main-form__input"
        type="text"
        onSubmit={handleSubmit}
        onChange={handleChange}
        value={inputValue}
        placeholder="What needs to be done?"
      />
    </form>
  );
};

export default AddTodo;
