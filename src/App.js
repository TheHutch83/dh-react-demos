import { useEffect, useState } from "react";
import axios from "axios";
import Todo from "./components/Todo";
import Controls from "./components/Controls";

const App = () => {
  const [todos, setTodos] = useState();
  const [search, setSearch] = useState("");
  const [newTodo, setNewTodo] = useState("");

  const getTodos = async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/todos`
    );

    setTodos(data);
  };

  useEffect(() => {
    getTodos();
  }, []);

  // useEffect(() => {
  //   getTodos();
  // }, [search]);

  const onSearchInput = (e) => {
    setSearch(e.target.value);
  };

  const onNewInput = (e) => {
    setNewTodo(e.target.value);
  };

  const onNewBtn = () => {
    const copy = [...todos];
    copy.push({
      userId: 1,
      id: Math.random(),
      title: newTodo,
      completed: false,
    });
    setTodos(copy);
    console.log("Btn");
  };

  if (!todos) {
    return <p>Loading...</p>;
  }

  const filtered = todos.filter((todo) => {
    return todo.title.toLowerCase().includes(search.toLocaleLowerCase());
  });

  console.log(todos, search, newTodo);

  return (
    <>
      <Controls
        onSearchInput={onSearchInput}
        onNewInput={onNewInput}
        onNewBtn={onNewBtn}
      />
      {filtered.map((todo) => {
        return <Todo {...todo} />;
      })}
    </>
  );
};

export default App;
