import React from "react";

const Filters = ({ todos, setFilter, deleteCompleted }) => {
  const handleAllClick = () => {
    setFilter("All");
  };

  const handleActiveClick = () => {
    setFilter("Active");
  };

  const handleCompletedClick = () => {
    setFilter("Completed");
  };

  const filters = (
    <div className="filters">
      <p className="filters__counter">{todos.length + " items left"}</p>
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
        onClick={deleteCompleted}
      >
        Clear completed
      </button>
    </div>
  );

  return filters;
};

export default Filters;
