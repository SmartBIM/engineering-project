import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
//import { useAxiosGet } from '../hooks/HttpRequests';

const Main = styled.main`
  padding: 1rem;
  h2 {
    margin: 1rem auto;
    text-align: center;
  }
  ul.item-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 1rem;
    padding-inline-start: 0;
  }
  li.item {
    background-color: rgba(0,0,0,0.1);
    border-radius: 4px;
    border: 0.5rem solid white;
    box-shadow: 0px 0px 5px rgba(0,0,0,0.5);
    list-style-type: none;
    padding: 0 0.5rem;
    text-align: center
  }
  a {
    color: #333;
  }
`;

function Home(){

  const url = `/products`;
  const [products, setProducts] = useState(null);
  let content = null;

  const fetchData = () => axios.get(url).then(res => setProducts(res.data))
  useEffect(() => fetchData(), [])
  //let products = useAxiosGet(url)

  //if(products.error){content = <li>There was an error</li>}

  if(products){
    content = products.map((product, key) => 
      <li className="item" key={key}>
        <h3><ProductCard product={product} /></h3>
      </li>
    )
  }

  return (
    <Main>
      <section>
        <h2>
          Products
        </h2>
        <ul className="item-list">
          { content }
        </ul> 
      </section>
    </Main>
  )
}

export default Home