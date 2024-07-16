import React, { useRef } from "react";
import Child from "./components/Child";

const App = () => {
  const myRef = useRef();

  const onClick = () => {
    myRef.current.focus();
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input ref={myRef} type="text" id="demo " name="demo" />
      <button onClick={onClick}>Set Focus</button>
    </form>
  );
};

export default App;
