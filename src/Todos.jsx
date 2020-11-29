import React from "react";
import CreateTodoElement from "./CreateTodoElement";
import { useSelector } from "react-redux";

const Todos = () => {
  const filter = useSelector((state) => state.filterReducer);
  const todos = useSelector((state) => state.todosReducer);

  const getLocalTodos = () => {
    if (filter === "All") return todos;

    if (filter === "Completed")
      return todos.filter((i) => i.isChecked === true);

    if (filter === "Active") return todos.filter((i) => i.isChecked === false);
  };

  // const localTodos = getLocalTodos();

  return (
    <div className="todo-list">
      <CreateTodoElement />
    </div>
  );
};

export default Todos;
