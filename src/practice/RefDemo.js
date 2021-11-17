import React, { Component } from "react";

class RefDemo extends Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
  }
  componentDidMount() {
    console.log(this.inputRef);
  }
  render() {
    return (
      <div>
        <input type="text" />
      </div>
    );
  }
}

export default RefDemo;
