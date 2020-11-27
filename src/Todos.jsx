import React from "react";
import CreateTodoElement from "./CreateTodoElement";
import { useSelector } from "react-redux";

const Todos = ({ todos, deleteTodo, checkTodo }) => {
  const filter = useSelector((state) => state.filterReducer);

  const getLocalTodos = () => {
    if (filter === "All") return todos;

    if (filter === "Completed")
      return todos.filter((i) => i.isChecked === true);

    if (filter === "Active") return todos.filter((i) => i.isChecked === false);
  };

  const localTodos = getLocalTodos();

  return (
    <div className="todo-list">
      {/* {localTodos.map((todo) => ( */}
      <CreateTodoElement
      // todo={todo}
      // deleteTodo={deleteTodo}
      // checkTodo={checkTodo}
      />
      {/* ))} */}
    </div>
  );
};

export default Todos;
