import React, { useContext, useEffect } from "react";
import { TodoContext } from "./TodoContext";
import ListTodos from "./components/ListTodos";
import CreateTodo from "./components/CreateTodo";

function App() {
  const { fetchTodos } = useContext(TodoContext);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => fetchTodos(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <div className="row p-5">
        <CreateTodo />
        <ListTodos />
      </div>
    </div>
  );
}

export default App;
