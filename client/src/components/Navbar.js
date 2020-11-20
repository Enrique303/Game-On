import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.div`
  * {
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
    font-family: 'Montserrat', sans-serif;
  }
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;
    color: #ffffff;
    font-size: 15px;
    font-weight: 500;
  }
  .container {
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:100%;
    padding: 10px;
    list-style-type:none;
  }
  .search {
    flex: 7;
  }
  .search-input {
    width:100%;
  }
  .home {
    flex:1;
  }
  .profile {
    flex:1;
    padding:10px;
  }

  @media all and (max-width: 600px) {  
    
    .container {  
      flex-wrap: wrap; 
      text-align: center; 
    }  
      
    .container > li {  
      flex-basis: 100%;  
    }
    .search {
      order: 1;
    }
    .search-input {
      width: 100%;
    }
  }
`;

const Navbar = () => {
  return (
    <StyledNav>
      <nav>
        <ul className = "container">
          <li className = "home">
            <Link to='/home'>Home</Link>
          </li>
          <li className = "search">
            <input type= "text" className = "search-input" placeholder = "Search" />
          </li>
          <li className = "profile">
            <Link to ='/myprofile'>My Profile</Link>
          </li>
        </ul>
      </nav>
    </StyledNav>
  )
}

export default Navbar
