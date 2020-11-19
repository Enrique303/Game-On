import React from 'react'
import styled from 'styled-components';
import img from '../img/retrocontroller.jpg'

const StyledLanding = styled.div`
  .landing {
    position: relative;
    background: url(${img}) no-repeat center center/cover;
    height: 100vh;
  }
  .landing-inner {
    height: 100%;
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color:#fff;
  }
  .lead {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  h1 {
    font-size: 4rem;
    line-height: 1.2;
    margin-bottom: 1rem;
  }
  a {
    color:#fff;
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
`;

const Landing = () => {
  return (
    <StyledLanding>
      <section className= "landing">
        <div>
          <div className= "landing-inner">
            <h1>Game On</h1>
            <p className = "lead">
              Find a Game and Add It To Your List!
            </p>
            <div className= "buttons">
              <a href ="#">Sign Up</a>
              <a href ="#">Login</a>
            </div>
          </div>
        </div>
      </section>
    </StyledLanding>
  )
}

export default Landing