import React, { Component } from "react";
import Header from "./Components/Header";
import Card from "./Components/Card";
import Infobar from "./Components/Infobar";
import "./App.css";


let imagesDummy = [
  { file: "Aragorn.JPG", key: 1, clicked: false  },
  { file: "Arwen.JPG", key: 2, clicked: false  },
  { file: "Elrond.JPG", key: 3, clicked: false  },
  { file: "Faramir.PNG", key: 4, clicked: false  },
  { file: "Frodo.PNG", key: 5, clicked: false  },
  { file: "Gandalf.JPG", key: 6, clicked: false  },
  { file: "Gimli.PNG", key: 7, clicked: false  },
  { file: "Gollum.PNG", key: 8, clicked: false  },
  { file: "Legolas.PNG", key: 9, clicked: false  },
  { file: "Pippin.JPG", key: 10, clicked: false  },
  { file: "Saruman.JPG", key: 11, clicked: false  },
  { file: "Sauron.JPG", key: 12, clicked: false  }
];



class App extends Component {

  state = {
    images: [
      { file: "Aragorn.jpg", key: 1, clicked: false },
      { file: "Arwen.jpg", key: 2, clicked: false  },
      { file: "Elrond.jpg", key: 3, clicked: false  },
      { file: "Faramir.png", key: 4, clicked: false  },
      { file: "Frodo.png", key: 5, clicked: false  },
      { file: "Gandalf.jpg", key: 6, clicked: false  },
      { file: "Gimli.png", key: 7, clicked: false  },
      { file: "Gollum.png", key: 8, clicked: false  },
      { file: "Legolas.png", key: 9, clicked: false  },
      { file: "Pippin.jpg", key: 10, clicked: false  },
      { file: "Saruman.jpg", key: 11, clicked: false  },
      { file: "Sauron.jpg", key: 12, clicked: false  }
    ],
    counter: 0,
    top: 0,
    reset: false

  }

  randomizeArray = () => {
    var currentIndex = imagesDummy.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = imagesDummy[currentIndex];
      imagesDummy[currentIndex] = imagesDummy[randomIndex];
      imagesDummy[randomIndex] = temporaryValue;
    }

    this.updateState();
  }

  updateState = () => {
    let newState = this.state.counter + 1;
    this.setState({reset: false});
    this.setState({counter: this.state.counter + 1});
    this.setState({images: imagesDummy});
    if (newState>=this.state.top){
      (this.setState({top: newState}))
    } 
    this.render();
  }


  startReset = () => {
    for (let i = 0; i < imagesDummy.length; i++){
      imagesDummy[i].clicked = false;
    }
    console.log("RESETTING");
    this.setState({images: imagesDummy});
    this.setState({counter: 0});
    this.setState({reset: true});
  }

  changeClicked = (passedKey) => {
    for (let i = 0; i < imagesDummy.length; i++){
      if (imagesDummy[i].key === passedKey){
        imagesDummy[i].clicked = true;
      } 
    }
    console.log("Changing Clicked");
    this.setState({images: imagesDummy});
  }



  render() {
    console.log("now rendering");
    return (
      <div>
        <Header count={this.state.counter} topScore={this.state.top} />
        <Infobar doReset={this.state.reset}/>
        <div className="container main-body">
          <div className="row">
            {this.state.images.map(image => (
              <Card pic={image} key={image.key} rando={this.randomizeArray} changeClicked={this.changeClicked} startReset={this.startReset}/>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
