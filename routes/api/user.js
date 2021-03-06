const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

const User = require('../../models/User')

//Register User 
router.post('/', [
  body('name', 'Name is required').trim().isLength({ min:3 }),
  body('email', 'Please include valid email').isEmail(),
  body('password', 'Please enter a password with 8 or more characters').isLength({ min: 8 })
], async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, password } = req.body

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.json({ errors: [{ msg: 'User already exists' }] });
    }

    user = new User({
      name,
      email,
      password
    });

    user.password = await bcrypt.hash(password, 10)
    await user.save();

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