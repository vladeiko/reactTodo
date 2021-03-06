import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SetAll, SetActive, SetCompleted, ClearCompleted } from "./actions";

const Filters = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todosReducer.todos).filter(
    (todo) => todo.isCompleted === false
  );

  const handleAllClick = () => {
    dispatch(SetAll());
  };

  const handleActiveClick = () => {
    dispatch(SetActive());
  };

  const handleCompletedClick = () => {
    dispatch(SetCompleted());
  };

  const handleClearCompleted = () => {
    dispatch(ClearCompleted());
  };

  const filters = (
    <div className="filters">
      <p className="filters__counter">{todos.length} items left</p>
      <div className="selected-input">
        <input
          className="filters__show-all"
          type="radio"
          id="radio1"
          name="radio-filter"
        />
        <label htmlFor="radio1" onClick={handleAllClick}>
          All
        </label>
      </div>
      <div className="selected-input">
        <input
          className="filters__show-active"
          type="radio"
          id="radio2"
          name="radio-filter"
        />
        <label htmlFor="radio2" onClick={handleActiveClick}>
          Active
        </label>
      </div>
      <div className="selected-input">
        <input
          className="filters__show-completed"
          type="radio"
          id="radio3"
          name="radio-filter"
        />
        <label htmlFor="radio3" onClick={handleCompletedClick}>
          Completed
        </label>
      </div>
      <button
        className="filters__clear-completed"
        type="radio"
        name="radio-filter"
        onClick={handleClearCompleted}
      >
        Clear completed
      </button>
    </div>
  );

  return filters;
};

export default Filters;
