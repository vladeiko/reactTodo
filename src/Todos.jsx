import React from "react";

const Todos = ({ todos, deleteTodo, checkTodo, filter }) => {
  const getLocalTodos = () => {
    if (filter === "All") return todos;

    if (filter === "Completed")
      return todos.filter((i) => i.isChecked === true);

    if (filter === "Active") return todos.filter((i) => i.isChecked === false);
  };

  const localTodos = getLocalTodos();

  const todoList = todos.length
    ? localTodos.map((todo) => (
        <div className={"todo-list__element "}>
          <label
            className="todo-label"
            htmlFor={"check-" + todo.id}
            key={todo.id}
          >
            <div className="list-element">
              <div>
                <input
                  className="check-button"
                  id={"check-" + todo.id}
                  type="checkbox"
                  defaultChecked={todo.isChecked}
                  onClick={() => checkTodo(todo.id)}
                ></input>
                <span
                  className={
                    "span " +
                    (todo.isChecked === false ? "not-completed" : "completed")
                  }
                >
                  {todo.content}
                </span>
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
        </div>
      ))
    : null;

  return <div className="todo-list">{todoList}</div>;
};

export default Todos;
