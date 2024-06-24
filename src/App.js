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

  onDeleteItem = (index) => {
    const album = [...this.state.album];
    album.splice(index, 1);
    this.setState({ album });
  };

  render() {
    console.log(this.state);

    if (!this.state.album) {
      return <p>Loading....</p>;
    }

    return <Album album={this.state.album} onDeleteItem={this.onDeleteItem} />; //conditional rendering needed
  }
}

export default App;
