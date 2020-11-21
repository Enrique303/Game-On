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
  if(games) {
    profileFields.games = games.split(',').map(games => games.trim());
  } 

  profileFields.social ={}
  if(youtube) profileFields.social.youtube = youtube;
  if(twitter) profileFields.social.twitter = twitter;
  if(twitch) profileFields.social.twitch = twitch;
  if(instagram) profileFields.social.instagram = instagram;

  try {
    let profile = await Profile.findOne({ user: req.user.id });

    //Update
    if (profile) {
      profile= await Profile.findOneAndUpdate(
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
//Get All Profiles
router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.find().populate('user', ['name']);
    res.json(profiles)
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//Get User Profile
router.get('/user/:user_id', async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.params.user_id }).populate('user', ['name']);
    if(!profile) return res.status(400).json({msg:'No profile found'});
    res.json(profile)
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//Delete Profiles and Users
router.delete('/', auth, async (req, res) => {
  try {
    await Profile.findOneAndRemove({ user: req.user.id })
    await User.findOneAndRemove({ _id: req.user.id })
    res.json({msg: 'User Deleted'})
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;