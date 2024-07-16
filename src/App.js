import React, { useState } from "react";

const App = () => {
  const [state, setState] = useState({ count: 0 });

  return (
    <>
      <p>{state.count}</p>
      <button
        onClick={() => {
          setState({ count: state.count + 1 });
        }}
      >
        Add
      </button>
    </>
  );
};

export default App;
