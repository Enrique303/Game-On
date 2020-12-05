const express = require('express');
const router = express.Router();
const request = require('request');
const config = require('config');

router.get('/', (req,res) =>{
  try {
    const option = {
      uri:`https://api.rawg.io/api/games?`,
      method: 'GET'
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error')
  }
  request(options, (error, response, body)=>{
    if(error) console.error(error);

    if (response.statusCode !== 200) {
      res.status(404).json({msg: 'No Game Found'});
    }

    res.json(JSON.parse(body));
  })
})


module.exports = router;