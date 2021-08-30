import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard(props){
  return (
    <>
      <Link to={`/products/${props.product.id}`}>
        {props.product.category}
      </Link>
    </>
  )
};

export default ProductCard;