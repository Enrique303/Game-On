import React from 'react';
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

const SearchBar = () => {

  return (
    <StyleSearchBar>
      <header>
        <div className='search-box'>
          <input className='form-control' id='searchStr' placeholder='Search' />
          <button className='btn btn-outline-success' type='button'><i className='fas fa-search'></i></button>
        </div>
      </header>
    </StyleSearchBar>
  )
}

export default SearchBar;