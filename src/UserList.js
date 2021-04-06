import React, { Component } from 'react';
import PropTypes from 'prop-types';
import User from './User';

class UserList extends Component {
  static propTypes = {};

  state = {
    showGamesPlayed: true,
  };

  render() {
    return (
      <div>
        <h3>List Of Users</h3>
        <ol>
          <User />
        </ol>
      </div>
    );
  }
}

export default UserList;
