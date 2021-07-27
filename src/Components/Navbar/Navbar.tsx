// Dépendances
import React from 'react';
import styled from 'styled-components';

// Composant actuellement Dispatch (ThemeSelector)
import ThemeSelector from '../../utils/ThemeSelector';

// Module CSS
import Classes from './Navbar.module.css';

const StyledA = styled.a`
  color: ${(props:any) => props.theme.primary };
  text-transform: uppercase;
  text-decoration: none;
  font-size: calc(10px + 2vmin);
`;

function Navbar() {
  return (
    <nav className={ Classes.navbar__container }>
      <StyledA 
        href="/"
        rel="noopener noreferrer"
      >&lt; Project Theme &gt;</StyledA>
      <ThemeSelector />
    </nav>
  );
}

export default Navbar;
