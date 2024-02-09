import React, { Component } from "react";
import "./App.css";
import Interface from "./components/Interface";
class App extends Component {
  state = {
    todos: [
      { title: "Clean car", done: false },
      { title: "Buy bread", done: false },
      { title: "Feed fish", done: false },
    ],
  };

  onTodoInput = (e) => {
    this.setState({ todoInput: e.target.value });
  };

  onAddClick = () => {
    const todos = [...this.state.todos];
    todos.push({ title: this.state.todoInput, todo: false });
    this.setState({ todos });
  };

  onDeleteClick = (title) => {
    const todos = [...this.state.todos];
    const indexOf = todos.findIndex((todo) => todo.title === title);
    todos.splice(indexOf, 1);
    this.setState({ todos });
  };

  onTodoToggleClick = (title) => {
    const todos = [...this.state.todos];
    const indexOf = todos.findIndex((todo) => todo.title === title);
    todos[indexOf].done = !todos[indexOf.done];
    this.setState({ todos });
  };

  onDeleteAll = () => {
    this.setState({ todos: [] });
  };

  render() {
    const { todos } = this.state;
    let totalTodo = 0;
    todos.forEach((todo) => {
      if (!todo.done) {
        totalTodo++;
      }
    });

    return (
      <Interface
        totalTodo={totalTodo}
        onTodoInput={this.onTodoInput}
        onAddClick={this.onAddClick}
        todos={this.state.todos}
        onTodoToggleClick={this.onTodoToggleClick}
        onDeleteClick={this.onDeleteClick}
        onDeleteAll={this.onDeleteAll}
      />
    );
    // <>
    //   <input type="text" onInput={this.onTodoInput} />
    //   <button onClick={this.onAddClick}>Add</button>
    //   <h1>Total todos: {totalTodo}</h1>
    //   {todos.map((todo) => {
    //     return (
    //       <div className={todo.done ? "done" : "undone"}>
    //         <p onClick={() => this.onTodoToggleClick(todo.title)}>
    //           {todo.title}
    //         </p>
    //         <button onClick={() => this.onDeleteClick(todo.title)}></button>
    //       </div>
    //     );
    //   })}
    //   <button onClick={this.onDeleteAll}>Delete All</button>
    // </> moved to component
  }
}

export default App;
