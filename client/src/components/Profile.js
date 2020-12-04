import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {  createProfile } from '../actions/profile'

const Profile = ({ createProfile }) => {
  const [formInfo, setFormInfo] = useState({
    bio: '',
    location: '', 
    games: '', 
    youtube: '', 
    twitter: '', 
    twitch: '', 
    instagram: '',
  });

  const [displaySocial, toggleSocial] = useState(false);

  const {
    bio,
    location, 
    games, 
    youtube, 
    twitter, 
    twitch, 
    instagram
  } = formInfo;

  const onChange = e => setFormInfo({...formInfo, [e.target.name]: e.target.value });
  const onSubmit = e =>{
    e.prevent.Default();
    createProfile(formInfo)
  };
  return (
    <>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <textarea placeholder="A short bio of yourself" name="bio" value={bio} onChange={e => onChange(e)}></textarea>
          <small className="form-text">Tell us a little about yourself</small>
        </div>
        <div className="form-group">
          <input type="text" placeholder="Location" name="location" value={location} onChange={e => onChange(e)} />
          <small className="form-text"
            > (eg. Denver, CO)
          </small>
        </div>
        <div className="form-group">
          <input type="text" placeholder="* Games" name="games" value={games} onChange={e => onChange(e)} />
          <small className="form-text"
            >Please use comma separated values (eg.
            Zelda, Halo, Last of Us, Sonic)
          </small>
        </div>
        <div className="my-2">
          <button onClick={() => toggleSocial(!displaySocial)}type="button" className="btn">
            Add Social Network Links
          </button>
          <span>Optional</span>
        </div>
        {displaySocial && <>
          <div className="form-group social-input">
            <i className="fab fa-youtube fa"></i>
            <input type="text" placeholder="YouTube URL" name="youtube" value={youtube} onChange={e => onChange(e)}/>
          </div>
          <div className="form-group social-input">
            <i className="fab fa-twitter fa"></i>
            <input type="text" placeholder="Twitter URL" name="twitter" value={twitter} onChange={e => onChange(e)}/>
          </div>
          <div className="form-group social-input">
            <i className="fab fa-twitter fa"></i>
            <input type="text" placeholder="Twitch URL" name="twitch" value={twitch} onChange={e => onChange(e)}/>
          </div>
          <div className="form-group social-input">
            <i className="fab fa-instagram fa"></i>
            <input type="text" placeholder="Instagram URL" name="instagram" value={instagram} onChange={e => onChange(e)}/>
          </div>
        </>
        }
        
        <input type="submit" className="btn" />
        <a className="btn btn-light my-1" href="dashboard.html">Go Back</a>
      </form>
    </>
  )
}

Profile.propTypes = {
  createProfile: PropTypes.func.isRequired
}

export default connect(null, { createProfile })(Profile);
