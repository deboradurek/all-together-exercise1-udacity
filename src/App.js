import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './UserList';
import AddUser from './AddUser';

class App extends Component {
  state = {
    gameUsers: [],
  };

  handleAddUser = (gameUser) => {
    gameUser.numGamesPlayed = 0;
    this.setState((currentState) => ({
      gameUsers: [...currentState.gameUsers, gameUser],
    }));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="App-title">React Nanodegree - Coding Practice by Udacity</h2>
        </header>
        <div>
          <AddUser gameUsers={this.state.gameUsers} onAddUser={this.handleAddUser} />
          <UserList gameUsers={this.state.gameUsers} />
        </div>
      </div>
    );
  }
}

export default App;
