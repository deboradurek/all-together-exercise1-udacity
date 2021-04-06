import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './UserList';
import AddUser from './AddUser';

class App extends Component {
  state = {
    gameUsers: [],
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="App-title">React Nanodegree - Coding Practice by Udacity</h2>
        </header>
        <div>
          <AddUser />
          <UserList />
        </div>
      </div>
    );
  }
}

export default App;
