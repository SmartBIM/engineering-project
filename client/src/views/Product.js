import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ProductWidget from '../components/ProductWidget';

const 
  StyledArticle = styled.article`
    max-width: 1200px;
    margin: 1rem auto;
  `,
  ProductId = styled.div`
    padding: 0 0 0.5rem 2rem;
  `,
  ProductData = styled.div`
    width: 70%;
    background-color: white;
    box-shadow: 0px 0px 5px rgba(0,0,0,0.5);
    border: 2px solid #999;
    padding: 0;
    float: left;
  `,
  ProductInfo = styled.div`
    width: 100%;
    height: 200px;
    background-color: white;
    box-shadow: 0px 0px 5px rgba(0,0,0,0.5);
    border: 2px solid #999;
    padding: 1rem;
  `
  
;


function Product(){
  const { id } = useParams();
  const url = `/products/${id}`;
  const [product, setProduct] = useState(null);
  let content = null;
  let infoContentStuff = null;
  //const [infoContent, setInfoContent] = useState();


  const fetchData = () => axios.get(url).then(res => setProduct(res.data));
  useEffect(() => fetchData(), []);

  function fetchInfoContent(props){
    //console.log(props);
    //console.log(product);
    switch(props) {
      case 1:
        //infoContentStuff = setInfoContent(product[0].productInfo);
        //infoContentStuff = product[0].productInfo;
        console.log(product[0].productInfo)
        break;
      case 2:
        //infoContentStuff = setInfoContent(product[0].resources);
        console.log(product[0].resources)
        break;
      case 3:
        //infoContentStuff = setInfoContent(product[0].other);
        console.log(product[0].other)
        break;
      //default: infoContentStuff = setInfoContent(product[0].productInfo);
    }
  };
  
  if(!product) {
    return content = <><div>An error has occurred</div></>
  };

  if (product) {
    //let types = [product[0].productInfo, product[0].resources, product[0].other];
    return (
      content =
      <>
        <StyledArticle>
          <ProductId>Product ID: {product[0].id}</ProductId>
          <ProductData>

            <figure  style={{margin: '0'}}>
              <img src={product[0].imageUrl} align="left" style={{padding: '1rem'}} />
            </figure>

            <div style={{padding: '1rem'}}>
              <div style={{width: '25%', float: 'left'}}>
                <h2>BRAND</h2>
                <p style={{paddingBottom: '2rem'}}>{product[0].brand}</p>
              </div>
              <div style={{width: '25%', float: 'left'}}>
                <h2>CATEGORY</h2>
                <p style={{paddingBottom: '2rem'}}>{product[0].category}</p>
              </div>
              <div style={{padding: '1rem'}}>
                <h3>DESCRIPTION</h3>
                <p style={{paddingBottom: '2rem'}}>{product[0].description}</p>
              </div>
              <div style={{padding: '1rem'}}>
                <span>FEATURES</span>
                <p>{product[0].features}</p>
              </div>
            </div>

          </ProductData>

          <ProductWidget />

          <div style={{clear:'both'}}>&nbsp;</div>

          <ProductInfo>
            <span onClick={() => fetchInfoContent(1)} style={{padding: '0.25rem 1rem', fontSize: '1.5rem'}}>Product Information</span>
            <span onClick={() => fetchInfoContent(2)} style={{padding: '0.25rem 1rem', fontSize: '1.5rem'}}>Resources</span>
            <span onClick={() => fetchInfoContent(3)} style={{padding: '0.25rem 1rem', fontSize: '1.5rem'}}>Other</span>

            <p>{ infoContentStuff }</p>
          </ProductInfo>

        </StyledArticle>
      </>
    )
  };

  return (
    <>
      { content }
    </>
  )
};

export default Product;