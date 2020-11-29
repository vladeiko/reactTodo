import React from "react";
import Header from "./Header";
import Todos from "./Todos";
import AddTodo from "./AddTodo";
import Filters from "./Filters";
import { useSelector } from "react-redux";

const App = () => {
  const todos = useSelector((state) => state.todosReducer);

  return (
    <div className="main-container">
      <Header />
      <div className="todo">
        <AddTodo />
        <Todos />
        <Filters />
      </div>
    </div>
  );
};

export default App;
