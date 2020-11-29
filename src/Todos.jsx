import React from "react";
import CreateTodoElement from "./CreateTodoElement";
import { useSelector } from "react-redux";

const Todos = () => {
  const filter = useSelector((state) => state.filterReducer);
  const todos = useSelector((state) => state.todosReducer.todos);

  const getLocalTodos = () => {
    if (filter === "All") return todos;

    if (filter === "Completed")
      return todos.filter((i) => i.isCompleted === true);

    if (filter === "Active")
      return todos.filter((i) => i.isCompleted === false);
  };

  const localTodos = getLocalTodos();

  return (
    <div className="todo-list">
      {localTodos.map((todo) => (
        <CreateTodoElement key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default Todos;
