import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const StyledLogin = styled.div`

`;

const Login = () => {
  const [formInfo, setFormInfo] = useState({
    email: '',
    password: '',
  });
  const { email, password, } = formInfo;
  const onChange = e => setFormInfo({ ...formInfo, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    
  }

  return (
    <StyledLogin>
      <h1>Sign Into Your Account</h1>
      <form className='form' onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={e => onChange(e)}
            required />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            minLength='8'
            value={password}
            onChange={e => onChange(e)}
            required />
        </div>
        <input
          type='submit'
          className='btn'
          value='Login' />
      </form>
      <p>
        Don't have an account? <Link to='/register'>Sign up</Link>
      </p>
    </StyledLogin>
  )
}

export default Login;
