import { useEffect, useState } from "react";
import axios from "axios";
import Todo from "./components/Todo";
import Controls from "./components/Controls";

const App = () => {
  const [todos, setTodos] = useState();
  const [search, setSearch] = useState();

  const getTodos = async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/todos`
    );

    setTodos(data);
  };

  useEffect(() => {
    getTodos();
  }, []);
  console.log(todos, search);

  useEffect(() => {
    getTodos();
  }, [search]);

  const onInput = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <Controls onInput={onInput} />
      {todos &&
        todos.map((todo) => {
          return <Todo {...todo} />;
        })}
    </>
  );
};

export default App;
