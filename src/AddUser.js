import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddUser extends Component {
  static propTypes = {
    gameUsers: PropTypes.array.isRequired,
    onAddUser: PropTypes.func.isRequired,
  };

  state = {
    gameUser: {
      firstName: '',
      lastName: '',
      username: '',
    },
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState((currentState) => ({
      gameUser: {
        ...currentState.gameUser,
        [name]: value,
      },
    }));
  };

  addUser = (event) => {
    event.preventDefault();
    const checkUserExist = this.userExists(this.state.gameUser.username);

    !checkUserExist ? this.props.onAddUser(this.state.gameUser) : alert('Username already exists.');
  };

  userExists = (currentUsername) => {
    const user = this.props.gameUsers.find((gamer) => gamer.username === currentUsername);
    return Boolean(user);
  };

  isDisabled = () => {
    const { firstName, lastName, username } = this.state.gameUser;
    return firstName === '' || lastName === '' || username === '';
  };

  render() {
    const { firstName, lastName, username } = this.state.gameUser;

    return (
      <div>
        <h1>New User</h1>
        <form onSubmit={this.addUser}>
          <input
            type="text"
            name="firstName"
            placeholder="Enter First Name"
            value={firstName}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Enter Last Name"
            value={lastName}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            value={username}
            onChange={this.handleInputChange}
          />
          <button disabled={this.isDisabled()}>Add</button>
        </form>
      </div>
    );
  }
}

export default AddUser;
