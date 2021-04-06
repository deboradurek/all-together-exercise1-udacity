import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddUser extends Component {
  static propTypes = {};

  state = {
    gameUser: {
      firstName: '',
      lastName: '',
      username: '',
    },
  };

  render() {
    return (
      <div>
        <h1>New User</h1>
        <form onSubmit={this.addUser}>
          <input type="text" name="firstName" placeholder="Enter First Name" />
          <input type="text" name="lastName" placeholder="Enter Last Name" />
          <input type="text" name="username" placeholder="Enter Username" />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default AddUser;
