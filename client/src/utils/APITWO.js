import axios from 'axios';

const APITWO = {
   search: function (query) {
     return axios.get(`https://api.rawg.io/api/games?dates=2020-01-01,2020-11-26&ordering=-added`);
   }
 };

 export default APITWO