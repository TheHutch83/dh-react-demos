import React, { Component } from "react";
import Spinny from "./components/Spinny";
import "./App.css";
import axios from "axios";
import Interface from "./components/Interface";

class App extends Component {
  state = {};

  async componentDidMount() {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=Newcastle&appid=3da8a0c7ed934203261619eac46bb437`
    );
    this.setState({ weather: data });
  }

  componentDidUpdate() {
    console.log("comp did update ran");
  }

  render() {
    console.log(this.state);

    return this.state.weather ? (
      <Interface weather={this.state.weather} />
    ) : (
      <Spinny />
    );
  }
}

export default App;
