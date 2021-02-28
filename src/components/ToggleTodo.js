import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";

export default function ToggleTodo({ todo }) {
  const { toggleTodo } = useContext(TodoContext);
  const { id, completed } = todo;

  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        checked={completed}
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
    </div>
  );
}
