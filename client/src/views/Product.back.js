import React from 'react'
import { useParams } from 'react-router-dom'
import { useAxiosGet } from '../hooks/HttpRequests'

function Product(){
    const { id } = useParams()

    const url = `/products/${id}`
    
    let product = useAxiosGet(url)

    let content = null

    if(product.error){
        content = <div>
            <div>
                There was an error please refresh or try again later.
            </div>
        </div>
    }

    if(product.data){
        content = 
        <div>
          {product.data.category}
        </div>
    }

    return (
        <div>
          {content}
        </div>
    )
}

export default Product