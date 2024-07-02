import React from "react";
import simpsons from "./backup.json";
import Character from "./component/Character";
import { Route, Routes } from "react-router";

const App = () => {
  return (
    <Routes>
      <Route path="/:name" element={<Character />} />
    </Routes>
  );
};

export default App;
