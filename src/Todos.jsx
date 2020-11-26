import React from "react";

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map((todo) => (
      <label className="todo-label" htmlFor={"check-" + todo.id} key={todo.id}>
        <div className="list-element">
          <span>{todo.content}</span>
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

  return <div className="todo-list">{todoList}</div>;
};

export default Todos;
