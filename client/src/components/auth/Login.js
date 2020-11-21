import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const StyledLogin = styled.div`
  .form .form-group {
  margin: 1.2rem 0;
}

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
      <section className= 'container'>
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
      </section>
    </StyledLogin>
  )
}

export default Login;
