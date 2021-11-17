import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
  constructor() {
    super();
    this.state = {
      name: "Ashish",
    };
    console.log("LifecycleA construtor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleA getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifecycleA componentDidMount");
  }

  render() {
    console.log("LifecycleA render");
    return (
      <>
        <div>LifecycleA</div>
        <LifecycleB />
      </>
    );
  }
}
export default LifecycleA;
