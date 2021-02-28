import React from "react";
import ReactDOM from "react-dom";
import { TodoContextProvider } from "./TodoContext";
import App from "./App";

function Root() {
  // provider should be the top level in the tree, surrounding all other components.
  return (
    <TodoContextProvider>
      <App />
    </TodoContextProvider>
  );
}

ReactDOM.render(<Root />, document.getElementById("root"));
