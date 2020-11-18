import React from 'react'
import styled from 'styled-components';

const StyledNav = styled.div`
  * {
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
    font-family: 'Montserrat', sans-serif;
  }
  .container {
    display: flex;
    background-color: #8a8a8a;
    color: #ffffff;
    padding:10px;
    margin: 0;
    list-style-type: none;
  }
  .search {
    flex: 8;
  }
  .search-input {
    width:1200px;
  }
  .home {
    flex:1;
  }
  .profile {
    flex:1;
    width:100%;
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
          <li className = "home">Home</li>
          <li className = "search">
            <input type= "text" className = "search-input" placeholder = "Search" />
          </li>
          <li className = "profile">My Profile</li>
        </ul>
      </nav>
    </StyledNav>
  )
}

export default Navbar
