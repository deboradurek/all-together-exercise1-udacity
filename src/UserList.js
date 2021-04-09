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

  gamesPlayedPanel = () => {
    this.setState((currentState) => ({
      showGamesPlayed: !currentState.showGamesPlayed,
    }));
  };

  render() {
    const { gameUsers } = this.props;
    const showGamesPlayed = this.state.showGamesPlayed;

    const gamesPlayedToggleButton = (
      <div>
        <button className="smallButton" onClick={this.gamesPlayedPanel}>
          {showGamesPlayed ? 'Hide' : 'Show'} the Number of Games Played
        </button>
      </div>
    );

    return (
      <div>
        <h3>List Of Users</h3>
        {gameUsers && gameUsers.length > 0 ? gamesPlayedToggleButton : ''}
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
