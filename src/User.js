import React from 'react';
import PropTypes from 'prop-types';

const User = (props) => (
  <li className="user">
    <p>{props.gameUser.username}</p>
    <p>Number of games played: {props.showGamesPlayed}</p>
  </li>
);

User.propTypes = {
  gameUser: PropTypes.object.isRequired,
  showGamesPlayed: PropTypes.bool.isRequired,
};

export default User;
