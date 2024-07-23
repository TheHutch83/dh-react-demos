import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [originalCardNumber, setOriginalCardNumber] = useState("");

  const onInput = (e) => {
    setSearchTerm(
      "*".repeat(originalCardNumber.length - 1) +
        originalCardNumber[originalCardNumber.length - 1]
    );
  };

  const onKeyDown = (e) => {
    setOriginalCardNumber(originalCardNumber + e.key);
  };

  return (
    <>
      <input
        type="text"
        onInput={onInput}
        onKeyDown={onKeyDown}
        value={searchTerm}
      />
    </>
  );
};

export default App;
