import React, { Component } from "react";
import Todo from "./components/Todo";

class App extends Component {
  state = { todos: ["Clean car", "Buy milk"] };
  render() {
    return this.state.todos.map((todo) => {
      return <Todo todo={todo} />;
    });
  }
}

export default App;
