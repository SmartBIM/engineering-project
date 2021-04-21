import React, { useEffect } from 'react'
import ProductList from '../components/ProductList'
import styled from 'styled-components'

import { useDispatch, useSelector } from 'react-redux'
import { getProducts, loadStylingByProductId } from '../stuff/actions'

function Home() {
  const dispatch = useDispatch()
  const p = useSelector(state => state.productList.products)

  useEffect(() => {
    dispatch(getProducts())
    dispatch(loadStylingByProductId())
  }, [dispatch])

  const Wrapper = styled.div`
    max-width: 1000px;
  `
  const H3 = styled.h3``

  return (
    <Wrapper>
      <H3>Product List</H3>
      <ProductList products={p} />
    </Wrapper>
  )
}

export default Home
