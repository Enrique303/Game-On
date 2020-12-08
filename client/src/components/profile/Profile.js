import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import Loading from '../Loading';
import { getUserProfile } from '../../actions/profile';
import ProfileItem from './ProfileItem'

const Profile = ({ getUserProfile, profile: { profiles, loading }}) => {
  useEffect(() => {
    getUserProfile();
  }, []);

  return <>
  { loading ? <Loading/> : <>
    <h1> My Profile</h1>
    <div className='profiles'>
      {profiles.length > 0 ? (
        profiles.map(profile => (
          <ProfileItem key={profile._id} profile={profile} />
        ))
      ) : (
        <h4>No profile found...</h4>
      )}
    </div>
  </>}
  </>
}

Profile.propTypes = {
  getUserProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
}

const mapStateToProps = state =>({
  profile: state.profile
})

export default connect(mapStateToProps, { getUserProfile })(Profile)
