import React, { Component } from "react";
import style from "../userGreet.module.css";

class UserGreet extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: true,
    };
  }
  render() {
    return (
      this.state.isLoggedIn && (
        <div className={style.heading}>Welcome Ashish</div>
      )
    );
  }
}
export default UserGreet;
