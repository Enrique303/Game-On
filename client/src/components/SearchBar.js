import React, { useState } from 'react';
import styled from 'styled-components';

const StyleSearchBar = styled.div`
  display: flex;
  border: 1px solid #333333;
  padding: 10px;
  margin: 20px;
  width: 100%;
  .form-group {
    display:flex;
    flex-direction: column;
    width:100%;

    input {
      height: 30px;
      outline:none;
    }
    button {
      height: 28px;
      border-radius: 5px;
      background-color: grey;
      color: #fff;
      font-size: 15px;
    }
  }
`;

const SearchBar = () => {

  return (
    <StyleSearchBar>
      <div className="form-group">
        <input
        value = {search}
        name= "search"
        type="text"
        placeholder = "Search for a Game"
        id="search"
        onChange={ e=> onChange(e) }
        />
        <br />
        <button onSubmit={e => onSubmit(e)}>Search</button>
      </div>
    </StyleSearchBar>
  )
}

export default SearchBar;