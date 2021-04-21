import React from 'react'
import styled from 'styled-components'

const ProductDetail = (props) => {
  const product = props.product
  const siteStyling = props.siteStyling

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

  const image = (product.media || [])[0] || '' // HACK - todo get rid of this
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

  const BigText = styled.h2``

  const BigTextFullRow = styled.h3`
    width: 70%;
    padding: 10px;
  `

  const BigTextContent = styled.div`font-size: 0.85em;font-weight: normal;`


  return (
    <Wrapper>
      <Header>{siteStyling.company}</Header>

      <DetailsAndPhotoContainer>
          <ProductImage></ProductImage>

        <DetailsContainer>
          <BigText>Brand: <BigTextContent>{product.brand}</BigTextContent></BigText>
          <BigText>Category: <BigTextContent>{product.category}</BigTextContent></BigText>

          <BigTextFullRow>Description: <BigTextContent>{product.description}</BigTextContent></BigTextFullRow>
          
          <BigTextFullRow>
            Features:
            <ul>
              {product.features.map((feature, idx) => <BigTextContent><li key={idx}>{feature}</li></BigTextContent>)}
            </ul>
          </BigTextFullRow>
        </DetailsContainer>
      </DetailsAndPhotoContainer>

      <Footer/>
    </Wrapper>
  )
}

export default ProductDetail
