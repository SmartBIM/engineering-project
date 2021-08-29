import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProductCard from '../components/ProductCard'
import { useAxiosGet } from '../hooks/HttpRequests'

function Home(){

    //const url = `/products`
    //let products = useAxiosGet(url)
//
    //let content = null
//
    //if(products.error){
    //    content = <div>
    //        <div>
    //            There was an error please refresh or try again later.
    //        </div>
    //    </div>
    //}
//
//
    //if(products.data){
    //    content = 
    //    products.data.map((product) => 
    //        <div key={product.id}>
    //            <ProductCard 
    //                product={product}
    //            />
    //        </div>
    //    )
    //}
    const url = `/products`;
    const [products, setProducts] = useState(null)
    let content = null

  const fetchData = () => axios.get(url).then(res => setProducts(res.data))
  useEffect(() => fetchData(), [])

  //if(products.error){content = <p>There was an error</p>}

  if(products){
    content = products.map((product) => 
      <div key={product.id}>
        <ProductCard product={product} />
      </div>
    )
  }

  return (
    <div>
      <h1>
        Products
      </h1>
      <div>
        { content } 
      </div>
    </div>
  )
}

export default Home