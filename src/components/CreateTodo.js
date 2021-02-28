import React, { useContext, useState } from "react";
import { TodoContext } from "../TodoContext";

export default function CreateTodo() {
  const { saveTodo } = useContext(TodoContext);

  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    saveTodo({
      title,
      completed,
    });
  }

  return (
    <div className="col-4">
      <form className="row" onSubmit={handleSubmit}>
        <div className="col-12">
          <label className="form-label">Title</label>
          <input
            className="form-control"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="col-12 mt-3">
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              value={completed}
              onChange={(e) => setCompleted(e.target.checked)}
              id="completed"
            />
            <label className="form-check-label" htmlFor="completed">
              Completed
            </label>
          </div>
        </div>
        <div className="col-12 mt-3">
          <button className="btn btn-primary" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
