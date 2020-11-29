const mainState = {
  todos: [],
  currentId: 0,
};

const todosReducer = (state, action) => {
  state = mainState;

  switch (action.type) {
    case "Add": {
      let newTodo = {
        id: state.currentId++,
        text: action.payload,
        isCompleted: false,
      };

      state.todos.push(newTodo);

      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default todosReducer;
