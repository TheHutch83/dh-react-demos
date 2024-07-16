import React from "react";

const App = () => {
  const onClick = () => {
    console.log("Click");
  };

  return <button onClick={onClick}>Click me</button>;
};

export default App;
