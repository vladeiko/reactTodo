import React from "react";

const CreateTodoElement = ({ todo, deleteTodo, checkTodo }) => {
  const handleCheckClick = () => {
    checkTodo(todo.id);
  };

  const handleRemoveClick = () => {
    deleteTodo(todo.id);
  };

  return (
    <div className={"todo-list__element "} key={todo.id}>
      <label className="todo-label" htmlFor={"check-" + todo.id}>
        <div className="list-element">
          <div>
            <input
              className="check-button"
              id={"check-" + todo.id}
              type="checkbox"
              defaultChecked={todo.isChecked}
              onClick={handleCheckClick}
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
          <button className="remove-button" onClick={handleRemoveClick}>
            ❌
          </button>
        </div>
      </label>
    </div>
  );
};

export default CreateTodoElement;
