import React, { Component } from "react";

class App extends Component {
  state = { todos: [" Clean car", "Buy milk"] };

  render() {
    const { todos } = this.state;
    if (!todos.length) {
      return <p>No todos</p>;
    }
    return this.state.todos.map((todo) => {
      return <p>{todo}</p>;
    });
  }
}

export default App;
