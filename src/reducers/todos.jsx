const mainState = {
  todos: [],
  currentId: 0,
};

const todosReducer = (state = mainState, action) => {
  switch (action.type) {
    case "AddTodoElement": {
      let newTodo = {
        id: state.currentId + 1,
        text: action.payload,
        isCompleted: false,
      };

      return {
        todos: [newTodo, ...state.todos],
        currentId: state.currentId + 1,
      };
    }

    case "SetCheckValue": {
      const todos = [...state.todos];
      todos.forEach((todo) => {
        if (todo.id === action.payload.id) {
          todo.isCompleted = !todo.isCompleted;
          return;
        }
      });

      return {
        todos,
        currentId: state.currentId,
      };
    }

    case "RemoveTodoElement": {
      const todos = [...state.todos].filter(
        (todo) => todo.id !== action.payload.id
      );

      return {
        todos,
        currentId: state.currentId,
      };
    }

    case "ClearCompleted": {
      const todos = [...state.todos].filter(
        (todo) => todo.isCompleted !== true
      );

      return {
        todos,
        currentId: state.currentId,
      };
    }

    default:
      return { ...state };
  }
};

export default todosReducer;
