import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Loading from '../Loading';
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';
import { getUserProfile } from '../../actions/profile';

const Profile = ({
  getUserProfile,
  profile: { profile, loading },
  auth,
  match
}) => {
  useEffect(() => {
    getUserProfile();
  }, [getUserProfile]);

  return (
    <Fragment>
      {profile === null || loading ? (
        <Loading />
      ) : (
        <Fragment>
          <Link to='/home' className='btn'>
            Back To Search
          </Link>
          {auth.isAuthenticated &&
            auth.loading === false &&
            auth.user._id === profile.user._id && (
              <Link to='/edit-profile' className='btn'>
                Edit Profile
              </Link>
            )}
          <div className='profile-grid'>
            <ProfileTop profile={profile} />
            <ProfileAbout profile={profile} />
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Profile.propTypes = {
  getUserProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getUserProfile }
)(Profile);