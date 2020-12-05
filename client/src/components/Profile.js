import React, { useState } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {  createProfile } from '../actions/profile'
import styled from 'styled-components';

const StyledForm = styled.div`
  .form .form-group {
  margin: 1.2rem 0;
}

.form  {
  display: block;
  margin-top: 0.3rem;
  color: #888;
  max-width: 1100px;
  margin: auto;
  overflow: hidden;
  padding: 0 2rem;
  margin-top: 6rem;
  margin-bottom: 3rem;
}

.form input,
.form textarea {
  display: block;
  width: 100%;
  padding: 0.4rem;
  font-size: 1.2rem;
  border: 1px solid #ccc;
}

.form input[type='submit'],
button {
  font: inherit;
}

.form .social-input {
  display: flex;
}

.form .social-input i {
  padding: 0.5rem;
  width: 4rem;
}

.form .social-input i.fa-twitter {
  color: #38a1f3;
}
.form .social-input i.fa-instagram {
  color: #3f729b;
}
.form .social-input i.fa-youtube {
  color: #c4302b;
}
.form .social-input i.fa-twitch {
  color: #9147fe;
}
.btn {
  display: inline-block;
  color: #333;
  padding: 0.4rem 1.3rem;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  margin-right: 0.5rem;
  transition: opacity 0.2s ease-in;
  outline: none;
}
`;

const Profile = ({ createProfile, history }) => {
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
    createProfile(formInfo, history);
    <Redirect to= '/home'/>
  };
  return (
    <StyledForm>
      <form className="form">
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
        <div>
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
            <i className="fab fa-twitch fa"></i>
            <input type="text" placeholder="Twitch URL" name="twitch" value={twitch} onChange={e => onChange(e)}/>
          </div>
          <div className="form-group social-input">
            <i className="fab fa-instagram fa"></i>
            <input type="text" placeholder="Instagram URL" name="instagram" value={instagram} onChange={e => onChange(e)}/>
          </div>
        </>
        }
        
        <input type="submit" className="btn" onSubmit={e => onSubmit(e)}/>
        <Link to="/home">Go Back</Link>
      </form>
    </StyledForm>
  )
}

Profile.propTypes = {
  createProfile: PropTypes.func.isRequired
}

export default connect(null, { createProfile })(withRouter(Profile));
