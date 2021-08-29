import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


function Product(){
  const { id } = useParams()
  const url = `/products/${id}`;
  const [product, setProduct] = useState(null)
  let content = null

  //useEffect(() => {
  //  setProduct({data: null})
  //  axios.get(url)
  //    .then(response => {
  //      setProduct({data: response.data})
  //    })
  //}, [url])

  const fetchData = () => axios.get(url).then(res => setProduct(res.data))
  useEffect(() => fetchData(), [])

  if (product) {
    console.log(product)
    return (
      content =
      <div>
        <div>Product ID: {product[0].id}</div>
        <img src={product[0].imageUrl} />
        <h2>Brand</h2>
        <h3>{product[0].brand}</h3>
        <hr />
        <h2>Category</h2>
        <h3>{product[0].category}</h3>
        <hr />
        <h3>Description</h3>
        <h4>{product[0].description}</h4>
      </div>
    )
  }

  return (
    <div>

      </div>
  )
}

export default Product