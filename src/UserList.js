import React, { Component } from 'react';
import PropTypes from 'prop-types';
import User from './User';

class UserList extends Component {
  static propTypes = {
    gameUsers: PropTypes.array.isRequired,
  };

  state = {
    showGamesPlayed: true,
  };

  render() {
    const { gameUsers } = this.props;
    const showGamesPlayed = this.state.showGamesPlayed;

    return (
      <div>
        <h3>List Of Users</h3>
        <ol>
          {gameUsers.map((gameUser) => (
            <User key={gameUser.username} gameUser={gameUser} showGamesPlayed={showGamesPlayed} />
          ))}
        </ol>
      </div>
    );
  }
}

export default UserList;
