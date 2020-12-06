import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { searchGames } from '../actions/games';
import { connect } from 'react-redux';
import styled from 'styled-components';

const StyleSearchBar = styled.div`
  header{
background: lightgray;
padding: 20px;
}
.search-box{
display: flex;
background: white;
border-radius: 18px;
overflow: hidden;
}
.search-box .form-control{
width:100%;
border: 0;
height: 36px;
padding:0 10px;
outline: 0;
}
.search-box .btn{
background: white;
border:1px solid #000;
height: 36px;
padding: 10px;
margin-right: 10px;
border: 0;
cursor: pointer;
outline: 0;
}
`;


const SearchBar = ( { searchGames } ) => {
  const [searchInfo, setSearchInfo] = useState({game:''})

  useEffect(() => {
    searchGames()
  }, [])
  
  const { game } = searchInfo
  const onChange = e => setSearchInfo({...searchInfo, [e.target.name]: e.target.value });

  const onClick = e =>{
    searchGames(searchInfo);
    console.log(searchInfo);
  };

  return (
    <StyleSearchBar>
      <header>
        <div className='search-box'>
          <input className='form-control' id='searchStr' placeholder='Search' name="game" value={game} onChange={e => onChange(e)} />
          <button className='btn' type='button' onClick={e => onClick(e)}><i className='fas fa-search'></i></button>
        </div>
      </header>
    </StyleSearchBar>
  )
}

SearchBar.propTypes = {
  searchGames: PropTypes.func.isRequired
}


export default connect(null,{searchGames})(SearchBar);