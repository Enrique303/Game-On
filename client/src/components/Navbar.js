import React from 'react'
import styled from 'styled-components';

const StyledNav = styled.div`
  .container {
    display: flex;
  }
  .search {
    flex: 1;
  }
  .container > li {  
  flex: 3;  
  }
  @media all and (max-width: 600px) {  
    
    .container {  
      flex-wrap: wrap;  
    }  
      
    .container > li {  
      flex-basis: 100%;  
    }
    .search {
      order: 1;
    }
  
  }
`;

const Navbar = () => {
  return (
    <StyledNav>
      <nav>
        <ul className = "container">
          <li>Home</li>
          <li className = "search">
            <input type= "text" className = "search-input" placeholder = "Search" />
          </li>
          <li>My Recommended</li>
          <li>My list</li>
        </ul>
      </nav>
    </StyledNav>
  )
}

export default Navbar
