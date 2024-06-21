import React, { Component } from "react";
import AlbumItem from "./AlbumItem";

class Album extends Component {
  render() {
    console.log(this.props);
    return this.props.album.map((item) => {
      return <AlbumItem {...item} />;
    });
  }
}

export default Album;
