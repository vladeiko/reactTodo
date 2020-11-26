import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    content: "",
  };

  handleChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.addTodo(this.state);
    this.setState({
      content: "",
    });
  };

  render() {
    return (
      <form className="main-form" onSubmit={this.handleSubmit}>
        <input
          className="main-form__input"
          type="text"
          onChange={this.handleChange}
          value={this.state.content}
          placeholder="What needs to be done?"
        />
      </form>
    );
  }
}

export default AddTodo;
