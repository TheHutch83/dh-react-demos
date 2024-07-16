import React, { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);

  useEffect(() => {
    console.log(
      "useEffect ran - like componentDidMount and componentDidUpdate"
    );
  });

  useEffect(() => {
    console.log("useEffect ran - like component did mount");
  }, []);
  //this runs once, when the component mounts. And only runs in certain circs
  //  you send it an array [] and is called is a dependancy array
  // [] square brackets means it will only run once

  useEffect(() => {
    console.log("useEffect ran -  only when count changes");
  }, [count]);

  useEffect(() => {
    console.log("useEffect ran -  only when count changes");
  }, [otherCount]);

  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me
      </button>
      <button
        onClick={() => {
          setOtherCount(count + 1);
        }}
      >
        other Click me
      </button>
    </>
  );
};

export default App;
