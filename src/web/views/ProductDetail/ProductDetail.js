import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { loadProduct, loadStylingByProductId } from '../../stuff/actions'

const ProductDetail = (props) => {
  const dispatch = useDispatch()
  const defaultProduct = { media: [], features: [], productId: props.productId }
  const product = useSelector(state => state.productList.products.find(p => p.id === props.productId) || defaultProduct)
  const siteStyling = useSelector(state => {
    try {
      return state.siteStyling.find(p => p.brand === product.brand) || {}
    } catch(e) {
      debugger
    }
  }) || {}

  useEffect(() => {
    dispatch(loadProduct(props.productId))
    dispatch(loadStylingByProductId(props.productId))
  }, [dispatch])

  const Wrapper = styled.section`
    width: 80%;
    border: 2px black solid;
  `

  const Header = styled.section`
    font-size: 1.5em;
    text-align: center;
    color: red;
    padding: 1em;
    background-color: ${siteStyling.headerColor}
  `

  const Footer = styled.section`
    font-size: 2.5em;
    text-align: center;
    color: red;
    padding: 1em;
    background-color: ${siteStyling.footerColor}
  `

  const image = (product.media || [])[0] || ''
  const ProductImage = styled.span`
    margin-left: 10px;
    margin-top: 40px;
    height: 200px;
    width: 200px;
    background-image: url("${image}");
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  `

  const DetailsContainer = styled.section`
    width: 70%;
    display: flex;
    align-items: stretch;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  `

  const DetailsAndPhotoContainer = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  `

  const BigText = styled.h2`
    padding: 10px;
  `

  const BigTextFullRow = styled.h3`
    width: 70%;
    padding: 10px;
  `
  return (
    <section>
      <h3>{product.id}</h3>

      <Wrapper>
        <Header>{siteStyling.company}</Header>

        <DetailsAndPhotoContainer>
           <ProductImage></ProductImage>

          <DetailsContainer>
            <BigText>Brand: {product.brand}</BigText>
            <BigText>Category: {product.category}</BigText>

            <BigTextFullRow>Description: {product.description}</BigTextFullRow>
            
            <BigTextFullRow>
              Features:
              <ul>
                {product.features.map((feature, idx) => <li key={idx}>{feature}</li>)}
              </ul>
            </BigTextFullRow>
          </DetailsContainer>
        </DetailsAndPhotoContainer>

        <Footer/>
      </Wrapper>
    </section>
  )
}

export default ProductDetail
