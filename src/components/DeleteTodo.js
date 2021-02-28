import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";

export default function DeleteTodo({ id }) {
  const { deleteTodo } = useContext(TodoContext);

  function handleClick(e) {
    e.preventDefault();
    deleteTodo(id);
  }

  return (
    <a href="#!" className="text-danger" onClick={handleClick}>
      <ion-icon name="trash"></ion-icon>
      Delete
    </a>
  );
}
