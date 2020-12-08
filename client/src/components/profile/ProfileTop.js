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
  padding: 1rem;
  line-height: 1.8;
  margin-bottom: 1rem;
}
.icons {
  padding: 0.5rem;
  width: 4rem;
}

.fa-twitch {
  color: #9147fe;
}
.fa-twitter {
  color: #38a1f3;
}
.fa-instagram {
  color: #3f729b;
}
.fa-youtube {
  color: #c4302b;
}
.large {
    font-size: 2rem;
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
      <div className='profile'>
        <div className='profile-top'>
          <h1 className='large'>{name}</h1>
          <p>{location && <span>{location}</span>}</p>
          <div className='icons'>
            {social && social.twitch && (
              <a href={social.twitch} target='_blank' rel='noopener noreferrer'>
                <i className='fab fa-twitch' />
              </a>
            )}
            {social && social.twitter && (
              <a href={social.twitter} target='_blank' rel='noopener noreferrer'>
                <i className='fab fa-twitter' />
              </a>
            )}
            {social && social.youtube && (
              <a href={social.youtube} target='_blank' rel='noopener noreferrer'>
                <i className='fab fa-youtube' />
              </a>
            )}
            {social && social.instagram && (
              <a href={social.instagram} target='_blank' rel='noopener noreferrer'>
                <i className='fab fa-instagram' />
              </a>
            )}
          </div>
        </div>
      </div>
    </StyledTop>      
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileTop;