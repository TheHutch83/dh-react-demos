import React, { Component } from "react";

class Child extends Component {
  constructor() {
    super();
  }

  async componentDidMount() {
    const { data } = await axios.get(
        `https://thesimpsonsquoteapi.glitch.me/quotes`
        );
this.setState({ simpsons: data });
  }

  render() {

if (this.state.simpsons) {
     return <p>We have data</p>
}

    return <p>Loading.....</p>;
  }
}

export default Child;
