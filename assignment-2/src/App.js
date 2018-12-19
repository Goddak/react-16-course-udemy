import React, { Component } from "react";
import Validator from "./LengthValidator/LengthValidator";
import Killer from "./CharacterKiller/CharacterKiller";
import "./App.css";

class App extends Component {
  state = {
    characters: 0,
    word: ""
  };

  inputChangeHandler = event => {
    let state = {
      characters: event.target.value.length,
      word: event.target.value
    };
    this.setState(state);
  };

  deleteCharacter = index => {
    let words = this.state.word.split("");
    words.splice(index, 1);
    let word = words.join("");
    let state = {
      word: word,
      characters: word.split("").length
    };
    this.setState(state);
  };

  render() {
    const characterCountContainerStyles = {
      width: "25%",
      padding: "1em",
      backgroundColor: "#333",
      color: "#FFF"
    };

    const characterCountInputStyles = {
      width: "100%",
      height: "2em",
      backgroundColor: "#777",
      color: "#FFF"
    };

    const characterKillerContainerStyles = {
      width: "25%",
      backgroundColor: "#777",
      color: "#FFF",
      padding: "1em"
    };

    return (
      <div className="App">
        <div
          className="character-count-container"
          style={characterCountContainerStyles}
        >
          <h5> Free character counter! </h5>
          <input
            type="text"
            onChange={this.inputChangeHandler}
            value={this.state.word}
            style={characterCountInputStyles}
          />
          <p> Character count: {this.state.characters} </p>
          <Validator value={this.state.characters} />
        </div>
        <div
          className="character-killer-container"
          style={characterKillerContainerStyles}
        >
          <h5> Free Character manager! </h5>
          {this.state.word.split("").map((character, index) => {
            return (
              <Killer
                key={index}
                character={character}
                clickFn={this.deleteCharacter.bind(this, index)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
