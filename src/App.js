import React, { Component } from "react";

class App extends Component {
  state = { todos: [" Clean car", "Buy milk"] };

  render() {
    return this.state.todos.map((todo) => {
      return <p>{todo}</p>;
    });
  }
}

export default App;
