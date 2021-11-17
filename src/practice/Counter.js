import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };
  }

  clickHandler() {
    this.setState({
      message: "GoodBye!",
    });
  }
  render() {
    return (
      <>
        <h2>{this.state.message}</h2>
        <button onClick={this.clickHandler}>Click</button>
      </>
    );
  }
}

export default Counter;
