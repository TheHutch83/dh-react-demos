import React, { Component } from "react";
import axios from "axios";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <aside></aside>
        <Main />
      </div>
    );
  }
}

export default App;
