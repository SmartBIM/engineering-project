import React from 'react'
import { useSelector } from 'react-redux'

const ProductDetail = (props) => {
  const product = useSelector(state => state.products.find(p => p.id === props.productId))
  const siteStyling = useSelector(state => state.siteStyling.find(p => p.brand === product.brand))

  // recreate page in pdf

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
            {product.features.map((feature, idx) => <li key={idx}>{feature}</li>)}
          </ul>
        </section>


      </div>


    {/* footer */}
    </div>
  )
}

export default ProductDetail
