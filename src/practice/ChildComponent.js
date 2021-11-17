import React, { Component } from "react";

class ChildComponent extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.clickHandler("child")}>Greet</button>
      </div>
    );
  }
}
export default ChildComponent;
