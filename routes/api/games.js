const express = require('express');
const router = express.Router();
const request = require('request');
const config = require('config');

router.get('/:name', (req,res) =>{
  try {
    const options = {
      uri:`https://api.rawg.io/api/games?search=${req.params.name}`,
      method: 'GET',
      headers:{'user-agent':'node.js'}
    };

    request(options, (error, response, body) => {
      if(error) console.error(error);
  
      if (response.statusCode !== 200) {
        res.status(404).json({msg: 'No Game Found'});
      }
  
      res.json(JSON.parse(body));
    })
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error')
  }

})


module.exports = router;