import React, { useState, useEffect } from 'react'
import API from '../utils/API'
import APITWO from '../utils/APITWO'
import GameContext from '../utils/GameContext'
import GameDetail from './GameDetail'


const Home = () => {
  const [result, setResult] = useState({});
  const [search, setsearch] = useState("");

  useEffect(() => {
    searchGames('');
  }, []);
  useEffect(() => {
    topGames('');
  }, []);

  const searchGames = async (query) => {
    try {
      const res = await API.search(query);
      console.log("GameContainer -> res", res.data)
      setResult(res.data);
    } catch (error) {
      console.log("there was an error processing your results")
    }
  };
  const topGames = async () => {
    try {
      const res = await APITWO.search();
      console.log("GameContainer -> res", res.data)
      setResult(res.data);
    } catch (error) {
      console.log("there was an error processing your results")
    }
  };

  const handleInputChange = event => {
    const { value } = event.target;
    setsearch(value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    searchGames(search);
  };
  
  return (
    <GameContext.Provider value={{
      search,
      result,
      handleInputChange,
      handleFormSubmit,
    }}>

        <GameDetail />
    </GameContext.Provider>
  )
}

export default Home;