import React, { Component } from 'react';
import './CharacterKiller.css';

class CharacterKiller extends Component {
  render () {
    return (
      <p className="character-killer" onClick={this.props.clickFn}>{this.props.character}</p>
    );
  }
}

export default CharacterKiller;