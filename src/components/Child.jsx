import React, { Component } from "react";

class Child extends Component {
  constructor() {
    super();
    console.log("contructor ran, the component is born");
  }
  render() {
    return <p>Iam CHILD</p>;
  }
}

export default Child;
