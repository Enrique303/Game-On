import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const StyledRegister = styled.div`

`;

const Register = () => {
  const [formInfo, setFormInfo] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });
  const { name, email, password, password2 } = formInfo;
  const onChange = e => setFormInfo({ ...formInfo, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (password !== password2) {
      alert('Passwords do not match');
    } else {
      console.log(formInfo);
    }
  }

  return (
    <StyledRegister>
      <h1>Create Your Account</h1>
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
        Already have an account? <Link to='/login'>Sign In</Link>
      </p>
    </StyledRegister>
  )
}

export default Register
