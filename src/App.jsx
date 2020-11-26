import React, { Component } from "react";
import Header from "./Header";
import Todos from "./Todos";
import AddTodo from "./AddTodo";

class App extends Component {
  state = {
    todos: [],
  };

  currentId = 0;

  deleteTodo = (id) => {
    const todos = this.state.todos.filter((item) => item.id !== id);

    this.setState({
      todos,
    });
  };

  addTodo = (todo) => {
    todo.id = this.currentId++;
    todo.isChecked = false;

    let todos = [...this.state.todos, todo];
    this.setState({
      todos,
    });
  };

  render() {
    return (
      <div className="main-container">
        <Header />
        <div className="todo">
          <AddTodo addTodo={this.addTodo} />
          <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        </div>
      </div>
    );
  }
}

export default App;
