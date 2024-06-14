import React, { Component } from "react";
import Bob from "./components/Bob";
import Alice from "./components/Alice";

class App extends Component {
  state = { name: "David", age: 41, happy: true };
  render() {
    //return <Alice name={this.state.nme} />;// long way
    return <Alice {...this.state} />;
  }
}

export default App;
