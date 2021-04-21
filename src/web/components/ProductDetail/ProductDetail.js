import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const ProductDetail = (props) => {
  const product = useSelector(state => state.products.find(p => p.id === props.productId))
  const siteStyling = useSelector(state => state.siteStyling.find(p => p.brand === product.brand))

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

  // fill with product image soon
  const ProductImage = styled.span`
    margin-left: 10px;
    margin-top: 40px;
    height: 200px;
    width: 200px;
    background-image: url("${product.media[0]}");
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
    // flex-basis: 200px;
  `

  const BigTextFullRow = styled.h3`
    width: 70%;
    padding: 10px;
  `


  return (
    <section>
      <h3>{product.id}</h3>

      <Wrapper>
        <Header>Company custom text</Header>

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
