import React from "react";

const Filters = (todos) => {
  const filters = (
    <div className="filters">
      <p className="filters__counter">0 items left</p>
      <div className="selected-input">
        <input
          className="filters__show-all"
          type="radio"
          id="radio1"
          name="radio-filter"
        />
        <label htmlFor="radio1">All</label>
      </div>
      <div className="selected-input">
        <input
          className="filters__show-active"
          type="radio"
          id="radio2"
          name="radio-filter"
        />
        <label htmlFor="radio2">Active</label>
      </div>
      <div className="selected-input">
        <input
          className="filters__show-completed"
          type="radio"
          id="radio3"
          name="radio-filter"
        />
        <label htmlFor="radio3">Completed</label>
      </div>
      <button
        className="filters__clear-completed"
        type="radio"
        name="radio-filter"
      >
        Clear completed
      </button>
    </div>
  );

  return filters;
};

export default Filters;
