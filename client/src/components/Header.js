import React, { useState } from 'react';
import styled from 'styled-components';
import ThemeSelector from './ThemeSelector';
import { Link } from 'react-router-dom';


const Herald = styled.header`
  background-color: ${(props) => props.theme.primary};
  border-bottom: 1px solid black;
  margin: 0;
  padding: 1rem;
  h1 {
    margin: .5rem;
    display: inline-block
  }
  a:link {
    color: white;
    text-decoration: underline;
    text-decoration-color: white;
  }
  a:visited {
    color: white;
    text-decoration: underline;
    text-decoration-color: white;
  }
  div {
    display: inline-block
  }
`;


function Header() {
  const [storeId] = useState('Company Store');

  return (
    <Herald>
      <h1>
        <Link to="/">{storeId}</Link>
      </h1>
      <ThemeSelector />
    </Herald>
  );
};

export default Header;