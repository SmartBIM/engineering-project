import React from 'react'
import { Link } from "@reach/router"

// needs edit link
function ProductListItem({item}) {
  return ( 
    <li>
      <Link to={`products/${item.id}`}> {item.brand} -- {item.category}</Link>
    </li>
  )
}


function ProductList(props) {
  const products = props.products.map((p, idx) => {
    return <ProductListItem key={idx} item={p} />
  })

  return (<ul>{products}</ul>)
}


export default ProductList
