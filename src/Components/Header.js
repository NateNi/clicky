import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  state = {
    top: 0,
    current: 0
  };

  render() {
    return (
      <nav>
        <div className="nav-wrapper green darken-4">
          <h4 className="alignleft">Current Score: {this.props.count}</h4>

          <div className="aligncenter">
            <img
              className="center logo"
              alt="Lord of the Rings Logo"
              src="./Images/lotr.png"
            />
          </div>

          <h4 className="right alignright">Top Score: {this.props.topScore}</h4>
        </div>
      </nav>
    );
  }
}

export default Header;
