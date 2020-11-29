import {
  addTodoElement,
  setCheckValue,
  removeTodoElement,
  clearCompleted,
} from "../actions/todosList";

const mainState = {
  todos: [],
  currentId: 0,
};

const todosReducer = (state = mainState, action) => {
  switch (action.type) {
    case addTodoElement: {
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

    case setCheckValue: {
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

    case removeTodoElement: {
      const todos = [...state.todos].filter(
        (todo) => todo.id !== action.payload.id
      );

      return {
        todos,
        currentId: state.currentId,
      };
    }

    case clearCompleted: {
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
