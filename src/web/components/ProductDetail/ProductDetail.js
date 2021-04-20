import React from 'react'
import { useSelector } from 'react-redux'

const ProductDetail = (props) => {
  console.log(props)

  const products = useSelector(state => state.products.find(p => p.id === props.productId))
  const product = useSelector(state => state.products.find(p => p.id === props.productId))



  // need to retrieve config about styling - based on brand?

  // recreate page in pdf

  const styling = {} // default

  return (
    <div>
      {/* header */}

      {/* product id */}
      <h3>{product.id}</h3>

      {/* info box */}
      <div>
        <div>
          {/* image */}
        </div>

        <h2>
          {product.brand} - {product.category}
        </h2>

        <section>
          <h4>Description</h4>
          <p>{product.description}</p>
        </section>

        <section>
          <h4>Features</h4>
          <ul>
            {product.features.map(feature => <li>{feature}</li>)}
          </ul>
        </section>


      </div>


    {/* footer */}
    </div>
  )
}

export default ProductDetail
