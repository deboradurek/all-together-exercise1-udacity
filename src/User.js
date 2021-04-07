import React from 'react';
import PropTypes from 'prop-types';

const User = (props) => (
  <li className="user">
    <p>{props.gameUser.username}</p>
    <p>Number of games played: {props.showGamesPlayed}</p>
  </li>
);

User.propTypes = {};

export default User;
