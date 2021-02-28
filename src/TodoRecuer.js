// Create reducer
export default function todoReducer(state, action) {
  switch (action.type) {
    case "FETCH_TODOS":
      return {
        ...state,
        todos: action.payload,
      };
    case "SAVE_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "TOGGLE_TODO":
      const { id, completed } = action.payload;
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === id) todo.completed = completed;
          return todo;
        }),
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
}
