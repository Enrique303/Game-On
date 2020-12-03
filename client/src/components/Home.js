import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUserProfile } from '../actions/profile';
import PropTypes from 'prop-types';

const Home = ({ getUserProfile, auth, profile }) => {
  useEffect(()=>{
    getUserProfile();
  },[]); 

  
  return (
    <div>Hello World</div>
  )
}


Home.propTypes = {
  getUserProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, {getUserProfile})(Home);