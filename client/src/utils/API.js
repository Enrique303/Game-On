import axios from 'axios';

const API = {
  search: function (query) {
    return axios.get(`https://api.rawg.io/api/games?search=${query}`);
  }
};

export default API
