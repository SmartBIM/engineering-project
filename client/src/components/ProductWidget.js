import React from 'react';
import styled from 'styled-components';


const AddDelete = styled.div`
  width: 300px;
  height: 200px;
  padding: 1rem;
  background-color: white;
  box-shadow: 0px 0px 5px rgba(0,0,0,0.5);
  border: 2px solid #999;
  float: left;
  margin-left: 1rem;
  button {
    background-color: ${(porps) => porps.theme.primary};
    color: ${(porps) => porps.theme.buttonTextColor};
    border: 0;
    border-radius: 4px;
    font-size: 1.2rem;
    width: 100%;
    padding: 0.75rem;
    margin: 1.625rem 0;
  }
`;

function ProductWidget() {
  return (
    <>
      <AddDelete>
        <button onClick={() => alert('Add Product clicked')}>Add Product</button>
        <button onClick={() => alert('Delete Product clicked')}>Delete Product</button>
      </AddDelete>
    </>
  )
}

export default ProductWidget;