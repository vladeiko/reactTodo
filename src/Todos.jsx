import React from "react";
import Filters from "./Filters";

const Todos = ({ todos, deleteTodo, checkTodo }) => {
  const todoList = todos.length ? (
    todos.map((todo) => (
      <label className="todo-label" htmlFor={"check-" + todo.id} key={todo.id}>
        <div className="list-element">
          <div
            className={
              "todo-list__element " +
              (todo.isChecked === false ? "not-completed" : "completed")
            }
          >
            <input
              className="check-button"
              id={"chech" + todo.id}
              type="checkbox"
              onClick={() => checkTodo(todo.id)}
            ></input>
            <span>{todo.content}</span>
          </div>
          <button
            className="remove-button"
            onClick={() => {
              deleteTodo(todo.id);
            }}
          >
            ❌
          </button>
        </div>
      </label>
    ))
  ) : (
    <p className="no-todos">No todo's left</p>
  );

  return (
    <div className="todo-list">
      {todoList}
      <Filters />
    </div>
  );
};

export default Todos;
