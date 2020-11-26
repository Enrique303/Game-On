import React, { Fragment, useContext } from 'react';
import GameContext from '../utils/GameContext'
import SearchBar from './SearchBar';
import styled from 'styled-components'

const StyleGameDetail = styled.div``;

const GameDetail = () => {
   const {
      result:{name, background_image, released}
    } = useContext(GameContext);
   return (
      <StyleGameDetail>
      <Fragment>
        <SearchBar />
        <h4>{name}</h4>
        <img src= {background_image}/>
        <h4>release {released}</h4>
      </Fragment>
    </StyleGameDetail>
   )
}

export default GameDetail
