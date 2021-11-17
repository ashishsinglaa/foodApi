import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor() {
    super();
    this.state = {
      message: "Parent",
    };
    this.greetParent = this.greetParent.bind(this);
  }

  greetParent(value) {
    alert(`Hello ${this.state.message} ${value}`);
  }

  render() {
    return (
      <div>
        <ChildComponent clickHandler={this.greetParent} />
      </div>
    );
  }
}

export default ParentComponent;
