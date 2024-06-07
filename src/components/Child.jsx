import React, { Component } from "react";
import axios from "axios";

class Child extends Component {
  constructor() {
    super();
    console.log("contructor ran, the component is born");
  }

  async componentDidMount() {
    console.log("HTML is now inside the DOM");

    const { data } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes
      `
    );

    console.log(data);
  }
  render() {
    return <p>Loading...</p>;
  }
}

export default Child;
