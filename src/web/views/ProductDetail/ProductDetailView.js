import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { loadProduct, loadStylingByProductId } from '../../stuff/actions'
import ProductDetails from '../../components/ProductDetails'
import AdditionalProductResources from '../../components/AdditionalProductResources'

const ProductDetailView = (props) => {
  const dispatch = useDispatch()
  const defaultProduct = { media: [], features: [], productId: props.productId }
  const product = useSelector(state => state.productList.products.find(p => p.id === props.productId) || defaultProduct)
  const siteStyling = useSelector(state => state.siteStyling.find(p => p.brand === product.brand)) || {}

  useEffect(() => {
    dispatch(loadProduct(props.productId))
    dispatch(loadStylingByProductId(props.productId))
  }, [dispatch])

  const H3 = styled.h3``
  const Section = styled.section``

  return (
    <Section>
      <H3>{product.id}</H3>

      <ProductDetails product={product} siteStyling={siteStyling} />

      {/* Button group */}

      <AdditionalProductResources resources={product.resources}/>
    </Section>
  )
}

export default ProductDetailView
