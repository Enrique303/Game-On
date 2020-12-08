import React from 'react';
import PropTypes from 'prop-types';


const GameComponent = ({results: {name}}) => {
  return (
    <div>
      <h3>{name}</h3>
    </div>
  )
}

GameComponent.propTypes = {
  searchGames: PropTypes.func.isRequired
}

export default GameComponent
