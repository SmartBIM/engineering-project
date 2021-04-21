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
  
  const Button = styled.button`
    width: 70%;
    background-color: red;
    color: white;
    padding: 5px;
    margin-top: 20px;
    margin-left: 15%;
  `

  const ButtonGroup = styled.div`
    border: 1px black solid;
    margin-left: 10px;
    padding-bottom: 20px;
    height: min-content;
  `


  const FlexSection = styled.section`
    display: flex;
    row-wrap: no-wrap;
    max-width: 80%;
  `

  const addProductOnClick = () => alert('Add Product Clicked')
  const removeProductOnClick = () => alert('Remove Product Clicked')


  return (
    <Section>
      <H3>{product.id}</H3>

      <FlexSection>
        <ProductDetails product={product} siteStyling={siteStyling} />

        <ButtonGroup>
          <Button onClick={addProductOnClick} key={0}>Add Product</Button>
          <Button onClick={removeProductOnClick} key={1}>Remove Product</Button>
        </ButtonGroup>
      </FlexSection>
      

      <AdditionalProductResources resources={product.resources}/>
    </Section>
  )
}

export default ProductDetailView
