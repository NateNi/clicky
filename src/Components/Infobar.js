import React, { Component } from "react";
import "./Infobar.css";

class Infobar extends Component {
  render() {
    return (
      <div>
        <div className="info">
          <div className="vertical-middle">
            <h2 className="middle">Clicky Game</h2>
            <h5 className="middle">
              Increase your score by clicking on a character. Don't click on any
              more than once!
            </h5>
          </div>
        </div>
        <h5 className="status">{(this.props.doReset ? "GAME OVER. Try Again!" : "Select a character!")}</h5>
      </div>
    );
  }
}

export default Infobar;
