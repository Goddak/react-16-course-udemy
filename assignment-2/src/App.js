import React, { Component } from 'react';
import User from './UserOutput/UserOutput';
import './App.css';

class App extends Component {
  state = {
    users: [
      { username: 'Kris' },
      { username: 'Chris' },
      { username: 'Dan' },
      { username: 'Ed' },
      { username: 'Laszlo' },
    ]
  }

  usernameChangeHandler = (index, event) => {
    let state = Object.assign({}, this.state);
    state.users[index] = { username: event.target.value };
    this.setState(state);
  }

  render() {
    const specialUserStyles = {
      backgroundColor: '#333',
      color: '#FFF'
    }

    return (
      <div className="App">
        <input type="text" onChange="this.inputChangeHandler" />
      </div>
    );
  }
}

export default App;
