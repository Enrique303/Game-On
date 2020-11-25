import React from 'react';
import axios from 'axios';

const BASEURL = 'https://api.rawg.io/api/games?key=';
const APIKEY = '';

const API = {
  search: function () {
    return axios.get(BASEURL + APIKEY);
  }
};

export default API
