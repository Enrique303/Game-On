import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Loading from './Loading'
import { getUserProfile } from '../actions/profile';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';

const Home = ({ getUserProfile, auth:{user}, profile: {profile, loading} }) => {
  useEffect(()=>{
    getUserProfile();
  },[]); 

  
  return loading && profile === null ? <Loading /> : (<>
    <p className='main'>Welcome {user && user.name}</p>
    <SearchBar/>

    
    </>
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