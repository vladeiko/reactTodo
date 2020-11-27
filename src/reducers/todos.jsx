const state = {
  todos: [],
};

const todosReducer = (state = state, action) => {
  switch (action.type) {
    case "Add": {
      return {
        todos: [...state.todos],
      };
      // todo.id = currentId++;
      // todo.isChecked = false;
    }
  }
};
