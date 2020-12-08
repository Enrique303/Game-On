import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { searchGames } from '../actions/games';
import { connect } from 'react-redux';
import styled from 'styled-components';

const StyleSearchBar = styled.div`
  header{
background: #fff;
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
border-bottom: solid 1px #dc3545;
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
img {
  display: block;
  width: 100%;
  height: 100%;
}

.wrapper {
  width: 100%;
  margin: 20px auto;
}

.cards-wrap {
  display: flex;
  flex-wrap: wrap;
}

.cards-wrap .card-item {
  width: 25%;
  padding: 10px;
}

.cards-wrap .card-inner {
  background: #fff;
}

.cards-wrap .card-top {
  width: 100%;
  padding: 10px;
  padding-bottom: 0;
}

.cards-wrap .card-bottom {
  padding: 15px;
}

.cards-wrap .card-bottom .card-category {
  text-transform: uppercase;
  text-align: center;
}

.cards-wrap .card-bottom .card-info {
  padding: 15px;
  margin: 10px 0;
  border: 1px dashed #0071bc;
}

.cards-wrap .card-bottom .card-info .title {
  color: #0071bc;
  font-size: 18px;
  margin-bottom: 5px;
}

.cards-wrap .card-bottom .card-store {
  text-align: center;
}

@media (max-width: 1024px) {
  .cards-wrap .card-item {
    width: 33.3%;
  }
}

@media (max-width: 768px) {
  .cards-wrap .card-item {
    width: 50%;
  }
}

@media (max-width: 528px) {
  .cards-wrap .card-top {
    height: auto;
  }
  .cards-wrap .card-item {
    width: 100%;
  }
}
`;


const SearchBar = ({ searchGames, results }) => {
  const [searchInfo, setSearchInfo] = useState({ game: '' });
  // console.log(results.results)

  useEffect(() => {
    searchGames()
  }, [searchGames])

  const { game } = searchInfo
  const onChange = e => setSearchInfo({ ...searchInfo, [e.target.name]: e.target.value });

  const onClick = e => {
    searchGames(searchInfo.game);
  };
  return (
    <StyleSearchBar>
      <header>
        <div className='search-box'>
          <input className='form-control' id='searchStr' placeholder='Search' name="game" value={game} onChange={e => onChange(e)} />
          <button className='btn' type='button' onClick={e => onClick(e)}><i className='fas fa-search'></i></button>
        </div>
        <div>
          {results.results.map(result => (
            <div key={result.id} className='wrapper'>
              <div className="cards-wrap">
                <div className="card-item">
                  <div className="card-inner">
                    <div className="card-top">
                      <img src={result.background_image} alt={result.name} />
                    </div>
                    <div className="card-bottom">
                      <div className="card-category">{result.name}</div>
                      <div className="card-info">
                        <p className="title">Available on these platforms</p>
                      </div>
                      <div className="card-store"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
          }
          </div>
      </header>
    </StyleSearchBar>
  )
}
SearchBar.propTypes = {
        searchGames: PropTypes.func.isRequired,
}
const mapStateToProps = (state) => ({
        results: state.game.results,
})

export default connect(mapStateToProps, { searchGames})(SearchBar);