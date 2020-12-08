import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import Loading from '../Loading';
import { getUserProfile } from '../../actions/profile';
import ProfileItem from './ProfileItem'

const Profile = ({ getUserProfile, profile: { profile, loading }, auth}) => {
  useEffect(() => {
    getUserProfile();
  }, []);
  return <>
  { profile === null || loading ? <Loading/> : <>
    <h1 className= 'my-profile'></h1>
    <div className='profiles'>
      <ProfileItem key={profile.id} profile={profile} />
    </div>
  </>}
  </>
}

Profile.propTypes = {
  getUserProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state =>({
  profile: state.profile,
  auth: state.auth
})

export default connect(mapStateToProps, { getUserProfile })(Profile)
