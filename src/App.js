import React, { Component } from "react";
class App extends Component {
  state = { count: 1 };

  onCountClick = () => {
    console.log("Click");

    this.setState({ count: this.state.count + 1, clicked: true });
  };

  render() {
    console.log(this.state);
    const { count } = this.state;

    return <p onClick={this.onCountClick}>{count}</p>;
  }
}

export default App;
