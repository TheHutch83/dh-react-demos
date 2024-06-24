import { getAllByTitle } from "@testing-library/react";
import React, { Component } from "react";

class AlbumItem extends Component {
  render() {
    //console.log(this.props); //this will show each item
    const { id, title, url, thumbnailUrl, onDeleteItem, index } = this.props;
    return (
      <div key={id}>
        <h1>{title}</h1>
        <a href={url}>
          <img src={thumbnailUrl} alt={title} />
        </a>
        <button onClick={() => onDeleteItem(index)}>Delete</button>
      </div>
    );
  }
}

export default AlbumItem;
