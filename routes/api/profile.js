const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Profile = require('../../models/Profile');
const User = require('../../models/User');

//GET User profile 
router.get('/myprofile', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate('user',['name']);
    if (!profile) {
      return res.status(400).json({msg: 'no profile'})
    }
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error')
  }
});

//Create User Profile
router.post('/', auth, async (req, res) => {
  const { bio, location, games, youtube, twitter, twitch, instagram } = req.body

  const profileFields = {};
  profileFields.user = req.user.id;
  if(bio) profileFields.bio = bio;
  if(location) profileFields.location = location;
  if(games) profileFields.games = games;

  profileFields.social ={}
  if(youtube) profileFields.social.youtube = youtube;
  if(twitter) profileFields.social.twitter = twitter;
  if(twitch) profileFields.social.twitch = twitch;
  if(instagram) profileFields.social.instagram = instagram;

  try {
    let profile = await Profile.findOne({ user: req.user.id });

    //Update
    if (profile) {
      profile= await Profile.findByIdAndUpdate(
        { user:req.user.id },
        { $set:profileFields },
        { new: true }
      );
      return res.json(profile)
    }
    profile = new Profile(profileFields)
    await profile.save();
    res.json(profile);

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
})

module.exports = router;