const express = require('express');
const router = express.Router();

//GET test route 
router.get('/', (req, res) => res.send('Authentication route'));

module.exports = router;