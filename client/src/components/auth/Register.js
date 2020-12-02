import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {  setAlert } from '../../actions/alert';
import {  register } from '../../actions/register';
import PropTypes from 'prop-types'


const StyledRegister = styled.div`
  .form .form-group {
  margin: 1.2rem 0;
}

.form input[type='text'],
.form input[type='email'],
.form input[type='password'] {
  display: block;
  width: 100%;
  padding: 0.4rem;
  font-size: 1.2rem;
  border: 1px solid #ccc;
}
.form input[type='submit'] {
  font: inherit;
}
.btn {
  display: inline-block;
  background: #f4f4f4;
  color: #333;
  padding: 0.4rem 1.3rem;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  margin-right: 0.5rem;
  transition: opacity 0.2s ease-in;
  outline: none;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: hidden;
  padding: 0 2rem;
  margin-top: 6rem;
  margin-bottom: 3rem;
}
`;

const Register = (props) => {
  const [formInfo, setFormInfo] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });
  const { name, email, password, password2 } = formInfo;
  const onChange = e => setFormInfo({ ...formInfo, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      props.setAlert('Passwords do not match', 'danger');
    } else {
      props.register({  name, email, password })
    }
  };

  if (props.isAuth) {
    return <Redirect to ="/home"/>;
  }

  return (
    <StyledRegister>
      <section className='container'>
        <h1>Create An Account</h1>
        <form className='form' onSubmit={e => onSubmit(e)}>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Name'
              name='name'
              value={name}
              onChange={ e => onChange(e) }
              required />
          </div>
          <div className='form-group'>
            <input
              type='email'
              placeholder='Email Address'
              name='email'
              value={email}
              onChange={ e => onChange(e) }
              required />
          </div>
          <div className='form-group'>
            <input
              type='password'
              placeholder='Password'
              name='password'
              minLength='8'
              value={password}
              onChange={ e=> onChange(e) }
              required />
          </div>
          <div className='form-group'>
            <input
              type='password'
              placeholder='Confirm Password'
              name='password2'
              minLength='8'
              value={password2}
              onChange={ e=> onChange(e) }
              required />
          </div>
          <input
            type='submit'
            className='btn'
            value='Register' />
        </form>
        <p>
          Already have an account? <Link to='/login'>SIGN IN</Link>
        </p>
      </section>  
    </StyledRegister>
  )
}
Register.propTypes = {
  setAlert:PropTypes.func.isRequired,
  register:PropTypes.func.isRequired,
  isAuth:PropTypes.bool,
};
const mapStateToProps = state => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { setAlert, register })(Register);
