import React, { Component } from "react";
import axios from "axios";

class Child extends Component {
  constructor() {
    super();
    console.log("contructor ran, the component is born");
  }

  componentDidMount() {
    console.log("HTML is now inside the DOM");
  }
  render() {
    return <p>Iam CHILD</p>;
  }
}

export default Child;
