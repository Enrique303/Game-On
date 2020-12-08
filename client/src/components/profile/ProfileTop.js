import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTop = styled.div`
  .profile-top {
  grid-area: top;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
`;

const ProfileTop = ({
  profile: {
    location,
    social,
    user: { name }
  }
}) => {
  return (
    <StyledTop>
      <div className='profile-top'>
        <h1 className='large'>{name}</h1>
        <p>{location && <span>{location}</span>}</p>
        <div className='icons'>
          {social && social.twitch && (
            <a href={social.twitch} target='_blank' rel='noopener noreferrer'>
              <i className='fab fa-twitch fa-2x' />
            </a>
          )}
          {social && social.twitter && (
            <a href={social.twitter} target='_blank' rel='noopener noreferrer'>
              <i className='fab fa-twitter fa-2x' />
            </a>
          )}
          {social && social.youtube && (
            <a href={social.youtube} target='_blank' rel='noopener noreferrer'>
              <i className='fab fa-youtube fa-2x' />
            </a>
          )}
          {social && social.instagram && (
            <a href={social.instagram} target='_blank' rel='noopener noreferrer'>
              <i className='fab fa-instagram fa-2x' />
            </a>
          )}
        </div>
      </div>
    </StyledTop>      
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileTop;