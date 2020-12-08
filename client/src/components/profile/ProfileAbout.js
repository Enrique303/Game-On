import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledAbout = styled.div`
  .profile-about {
  grid-area: about;
  text-align: center;
}

.profile-about .skills {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
`;

const ProfileAbout = ({profile: {bio,games,user: { name }}}) => (
  <StyledAbout>
    <div className='profile-about bg-light p-2'>
      {bio && (
        <Fragment>
          <h2 className='text-primary'>{name.trim().split(' ')[0]}s Bio</h2>
          <p>{bio}</p>
          <div className='line' />
        </Fragment>
      )}
      <h2 className='text-primary'>Games</h2>
      <div className='game'>
        {games.map((game, index) => (
          <div key={index} className='p-1'>
            <i className='fas fa-check' /> {game}
          </div>
        ))}
      </div>
    </div>
  </StyledAbout>
);

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;