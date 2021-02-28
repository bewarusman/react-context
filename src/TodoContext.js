import React, { createContext, useReducer } from "react";
import todoReducer from "./TodoRecuer";

// Define the defualt value
const initialState = {
  todos: [],
};

// Create context
export const TodoContext = createContext(initialState);

// Create Provider
export function TodoContextProvider({ children }) {
  // Use reducer
  const [state, dispatch] = useReducer(todoReducer, initialState);

  // Define reducer actions
  function fetchTodos(todos) {
    dispatch({
      type: "FETCH_TODOS",
      payload: todos,
    });
  }

  function saveTodo(todo) {
    dispatch({
      type: "SAVE_TODO",
      payload: todo,
    });
  }

  function toggleTodo(id, completed) {
    dispatch({
      type: "TOGGLE_TODO",
      payload: {
        id,
        completed,
      },
    });
  }

  function deleteTodo(id) {
    dispatch({
      type: "DELETE_TODO",
      payload: id,
    });
  }

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        fetchTodos,
        saveTodo,
        toggleTodo,
        deleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
