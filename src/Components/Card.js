import React, { Component } from "react";

class Card extends Component {

  handleClick = () => {
    if (this.props.pic.clicked) {
      this.props.startReset();
    } else {
      this.props.changeClicked(this.props.pic.key);
      console.log("shuffle");
      this.props.rando();
    }
  };

 /*  checkForReset = () => {
    {(this.props.reset) ? this.setState({ clicked: false }) : console.log("No Reset")};
  } */

  render() {
    return (
      <div className="col s6 m4 l3">
        <img
          onClick={this.handleClick}
          alt={this.props.pic.file}
          src={"./Images/" + this.props.pic.file}
          width="150px"
          height="150px"
        />
      </div>
    );
  }
}

export default Card;
