import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {};

  componentDidMount() {
    this.getAPIData();
  }

  getAPIData = async () => {
    const { data } = await axios.get(
      `https://api.spacexdata.com/v5/launches/latest`
    );

    this.setState({ spaceX: data });
  };

  render() {
    console.log(this.state);
    return <></>;
  }
}

export default App;
