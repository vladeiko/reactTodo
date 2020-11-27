import React, { Component } from "react";
import Header from "./Header";
import Todos from "./Todos";
import AddTodo from "./AddTodo";
import Filters from "./Filters";

class App extends Component {
  state = {
    todos: [],
    filter: "All",
  };

  currentId = 0;

  setFilter = (filter) => {
    const todos = this.state.todos;

    this.setState({
      todos,
      filter,
    });
  };

  deleteTodo = (id) => {
    const todos = this.state.todos.filter((item) => item.id !== id);

    this.setState({
      todos,
    });
  };

  checkTodo = (id) => {
    const todos = [...this.state.todos];
    todos.forEach((i) => {
      if (i.id === id) {
        i.isChecked = !i.isChecked;
      }
    });

    this.setState({
      todos,
    });
  };

  addTodo = (todo) => {
    todo.id = this.currentId++;
    todo.isChecked = false;

    const todos = [todo, ...this.state.todos];
    this.setState({
      todos,
    });
  };

  deleteCompleted = () => {
    const todos = this.state.todos.filter((i) => !i.isChecked);

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
          <Todos
            todos={this.state.todos}
            deleteTodo={this.deleteTodo}
            checkTodo={this.checkTodo}
            filter={this.state.filter}
          />

          {this.state.todos.length ? (
            <Filters
              todos={this.state.todos}
              deleteCompleted={this.deleteCompleted}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
