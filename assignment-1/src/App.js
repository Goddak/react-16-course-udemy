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
        <User
          name={this.state.users[0].username}
          changeUsername={this.usernameChangeHandler.bind(this, 0)}
          style={specialUserStyles}
          para1="I don't like people"
        ></User>
        <User
          name={this.state.users[1].username}
          changeUsername={this.usernameChangeHandler.bind(this, 1)}
          para1="I've just been digging a hole"
        ></User>
        <User
          name={this.state.users[2].username}
          changeUsername={this.usernameChangeHandler.bind(this, 2)}
        ></User>
        <User
          name={this.state.users[3].username}
          changeUsername={this.usernameChangeHandler.bind(this, 3)}
          para1="Shit on it"
          para2="Is it a poo"
        ></User>
        <User
          name={this.state.users[4].username}
          changeUsername={this.usernameChangeHandler.bind(this, 4)}
        ></User>
      </div>
    );
  }
}

export default App;
