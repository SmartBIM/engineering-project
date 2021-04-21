import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { loadProduct, loadStylingByProductId } from '../stuff/actions'
import ProductDetails from '../components/ProductDetails'
import AdditionalProductResources from '../components/AdditionalProductResources'

const ProductDetailView = (props) => {
  const dispatch = useDispatch()
  const defaultProduct = { media: [], features: [], productId: props.productId }
  const product = useSelector(state => state.productList.products.find(p => p.id === props.productId) || defaultProduct)
  const siteStyling = useSelector(state => state.siteStyling.find(p => p.brand === product.brand)) || {}

  useEffect(() => {
    dispatch(loadProduct(props.productId))
    dispatch(loadStylingByProductId(props.productId))
  }, [dispatch])


  const Header = styled.section`
    font-size: 1.5em;
    font-family: ${siteStyling.font};
    text-align: center;
    color: ${siteStyling.headerTextColor};
    padding: 1em;
    background-color: ${siteStyling.headerColor};
    margin-top: 30px;
  `

  const H3 = styled.h3`margin-left: 30px;`
  const Section = styled.section`
    background-color: ${siteStyling.headerColor};
    padding-bottom: 30px;
    max-width: 1000px;

  `
  
  const Button = styled.button`
    width: 70%;
    background-color: ${siteStyling.buttonColor};
    color: ${siteStyling.buttonText};
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
    max-width: 100%;
    background-color: white;
  `

  const addProductOnClick = () => alert('Add Product Clicked')
  const removeProductOnClick = () => alert('Remove Product Clicked')


  return (
    <Section>
      <Header>{siteStyling.company}</Header>

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
