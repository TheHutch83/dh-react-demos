import React, { Component } from "react";
import Todo from "./Todo";
class Interface extends Component {
  state = {};
  render() {
    const {
      onTodoInput,
      onAddClick,
      totalTodo,
      todos,
      onTodoToggleClick,
      onDeleteClick,
      onDeleteAll,
    } = this.props;

    return (
      <>
        <input type="text" onInput={onTodoInput} />
        <button onClick={onAddClick}>Add</button>
        <h1>Total todos: {totalTodo}</h1>
        {todos.map((todo) => {
          return (
            <Todo
              todo={todo}
              onTodoToggleClick={onTodoToggleClick}
              onDeleteClick={onDeleteClick}
            />
            // <div className={todo.done ? "done" : "undone"}>
            //   <p onClick={() => this.props.onTodoToggleClick(todo.title)}>
            //     {todo.title}
            //   </p>
            //   <button onClick={() => this.props.onDeleteClick(todo.title)}>
            //     X
            //   </button>
            // </div> further component
          );
        })}
        <button onClick={onDeleteAll}>Delete All</button>
      </>
    );
  }
}

export default Interface;
