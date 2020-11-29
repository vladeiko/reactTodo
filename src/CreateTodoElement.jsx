import React from "react";
import { useDispatch } from "react-redux";
import { SetCheckValue } from "./actions";

const CreateTodoElement = ({ todo }) => {
  const dispatch = useDispatch();

  const handleCheckClick = () => {
    dispatch(SetCheckValue(todo));
  };

  const handleRemoveClick = () => {
    // deleteTodo(todo.id);
  };

  return (
    <div className={"todo-list__element "} key={todo.id} id={todo.id}>
      <label className="todo-label" /*htmlFor={"check-" + todo.id}*/>
        <div className="list-element">
          <div>
            <input
              className="check-button"
              id={"check-" + todo.id}
              type="checkbox"
              defaultChecked={todo.isCompleted}
              onClick={handleCheckClick}
            ></input>
            <span
              className={
                "span " +
                (todo.isCompleted === true ? "completed" : "not-completed")
              }
            >
              {todo.text}
            </span>
          </div>
          <button className="remove-button" /*onClick={handleRemoveClick}*/>
            ❌
          </button>
        </div>
      </label>
    </div>
  );
};

export default CreateTodoElement;
