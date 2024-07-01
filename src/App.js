import React from "react";

import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <button>+</button>
      <button>-</button>
      <p>Count: {}</p>
    </>
  );
};

export default App;
