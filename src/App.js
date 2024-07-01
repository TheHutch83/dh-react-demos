import axios from "axios";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

import React from "react";

const App = () => {
  return (
    <div>
      <Header />
      <aside></aside>
      <Main />
      <Footer />
    </div>
  );
};

export default App;
