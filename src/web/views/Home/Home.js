import React, { useEffect } from 'react'
import ProductList from '../../components/ProductList'

import { useDispatch, useSelector } from 'react-redux'
import { getProducts, loadStylingByProductId } from '../../stuff/actions'

function Home() {
  const dispatch = useDispatch()
  const p = useSelector(state => state.productList.products)

  useEffect(() => {
    dispatch(getProducts())
    dispatch(loadStylingByProductId())
  }, [dispatch])


  return (
    <div>
      <h3>Product List</h3>

      <ProductList products={p} />
    </div>
  )
}

export default Home
