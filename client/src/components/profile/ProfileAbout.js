import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledAbout = styled.div`
.profile-about {
  display:grid;
  grid-area: about;
  text-align: center;
  padding: 1rem;
  line-height: 1.8;
  margin-bottom: 1rem;
}

.profile-about .skills {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.text-primary {
  border: 1px solid black;
  color: #17a2b8;
}
.fa-gamepad{
  color: #b5b6e4;
}
.game {
  border: 1px solid #0071bc;
}
.p-game {
  border: 1px solid #0071bc;
  margin-bottom: 10px
}
`;

const ProfileAbout = ({profile: {bio,games,user: { name }}}) => (
  <StyledAbout>
    <div className='profile-about'>
      {bio && (
        <Fragment>
          <h2 className='text-primary'>{name.trim().split(' ')[0]}s Bio</h2>
          <p className='p-game'>{bio}</p>
          <div className='line' />
        </Fragment>
      )}
      <h2 className='text-primary'>Favorite Games</h2>
      <div className='game'>
        {games.map((game, index) => (
          <div key={index} className='p-1'>
            <i className='fas fa-gamepad' /> {game}
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