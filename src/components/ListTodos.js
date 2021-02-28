import React, { useContext, useEffect } from "react";
import { TodoContext } from "../TodoContext";
import DeleteTodo from "./DeleteTodo";
import ToggleTodo from "./ToggleTodo";

export default function ListTodos() {
  const { todos } = useContext(TodoContext);

  return (
    <div className="col-8">
      <table className="table table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Completed</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{todo.title}</td>
              <td className={todo.completed ? "text-primary" : "text-warning"}>
                {todo.completed ? (
                  <ion-icon
                    name="checkmark-circle-outline"
                    size="large"
                    className="text-primary"
                  ></ion-icon>
                ) : (
                  <ion-icon
                    name="close-circle-outline"
                    className="text-warning"
                    size="large"
                  ></ion-icon>
                )}
              </td>
              <td>
                <ToggleTodo todo={todo} />
              </td>
              <td>
                <DeleteTodo id={todo.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
