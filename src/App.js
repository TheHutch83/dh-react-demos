import React from "react";

import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount(count + 1);
  };

  const minus = () => {
    setCount(count - 1);
  };

  return (
    <>
      <button onClick={add}>+</button>
      <button onClick={minus}>-</button>
      <p>Count: {count}</p>
      {/* this count here, refers to count above */}
    </>
  );
};

export default App;
