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
      </Fragment>
    </StyleGameDetail>
   )
}

export default GameDetail
