import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Title = styled.h1`
  background-color: #CCC;
  border-bottom: 1px solid black;
  margin: 0;
  padding: 1rem;
`;

function Header() {
  const [storeId] = useState('White Company Store');
  return (
    <header>
      <Title>
        <Link to="/"><span style={{color: "white"}}>{storeId}</span></Link>
      </Title>
    </header>
  );
};

export default Header;