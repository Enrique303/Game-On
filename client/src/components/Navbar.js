import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.div`
  * {
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
    font-family: 'Montserrat', sans-serif;
  }
  .navigation {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  list-style: none;
  margin: 0; 
  background: #707070;
}
.navigation a {
  text-decoration: none;
  display: block;
  padding: 1em;
  color: white;
}

.navigation a:hover {
  background: #1565C0;
}

@media all and (max-width: 800px) {
  .navigation {
    justify-content: space-around;
  }
}

@media all and (max-width: 600px) {
  .navigation {
    flex-flow: column wrap;
    padding: 0;
  }
  .navigation a { 
    text-align: center; 
    padding: 10px;
    border-top: 1px solid rgba(255, 255, 255,0.3); 
    border-bottom: 1px solid rgba(0, 0, 0, 0.1); 
  }
  .navigation li:last-of-type a {
    border-bottom: none;
  }
}
`;

const Navbar = () => {
  return (
    <StyledNav>
      <nav>
        <ul className="navigation">
          <li>
            <Link to='/home'>Home</Link>
          </li>
          <li>
            <Link to='/myprofile'>My List</Link>
          </li>
          <li>
            <Link to='/myprofile'>My Profile</Link>
          </li>
          <li>
            <Link to='/register'>Register</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
        </ul>
      </nav>
    </StyledNav>
  )
}

export default Navbar
