import React from 'react'
import {Link} from 'react-router-dom'

function ProductCard(props){
  return (
    <div>
      <Link to={`/products/${props.product.id}`}>
        {props.product.category}
      </Link>
    </div>
  )
}

export default ProductCard