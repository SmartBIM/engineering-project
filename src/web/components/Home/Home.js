import React from 'react'
import ProductList from '../ProductList/ProductList'

import { useSelector } from 'react-redux'

function Home() {
  const p = useSelector(state => state.products)

  return (
    <div>
      <p>Test List</p>

      <ProductList products={p} />
    </div>
  )
}

export default Home
