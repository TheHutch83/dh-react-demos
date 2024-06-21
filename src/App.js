import React, { Component } from "react";
import axios from "axios";
import Album from "./components/Album";

class App extends Component {
  state = {};

  async componentDidMount() {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/photos`
    );
    // chop the data down
    data.length = 50;
    this.setState({ album: data });
  }
  render() {
    console.log(this.state);

    if (!this.state.album) {
      return <p>Loading....</p>;
    }

    return <Album album={this.state.album} />; //conditional rendering needed
  }
}

export default App;
