const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require('../../models/User')
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcryptjs');

//GET User
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error')
  }
});

//Login User

router.post('/', [
  body('email', 'Please include valid email').isEmail(),
  body('password', 'Password required').exists()
], async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body

  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.json({ errors: [{ msg: 'Invalid Credentials' }] });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ errors: [{ msg: 'Invalid Credentials' }] });
    }

    const payload = {
      user: {
        id: user.id
      }
    };

    jwt.sign(payload, config.get('jwtSecret'), { expiresIn: 3600 },
     (err, token) => {
      if (err) throw err;
      res.json({ token });      
     }
    );
  } catch (err) {
    console.error(error.message);
    res.status(500).send('Server error');
  }

});

module.exports = router;