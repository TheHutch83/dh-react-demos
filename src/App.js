import React from "react";

const App = () => {
  const { href } = window.location;

  if (href.includes("about")) {
    return <h1>About page</h1>;
  }

  if (href.includes("contact")) {
    return <h1>Contact </h1>;
  }

  return (
    <>
      <p>Other page!</p>
      <a href="about">About</a>
      <a href="contact">Contact</a>
    </>
  );
};

export default App;
