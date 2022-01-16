import React from "react";
import {
    Link
} from 'react-router-dom';
import { useSelector } from 'react-redux'
import placeholderImg from '../../src/assets/prod_placeholder_image.png';
import { MainWrap } from "../styles/common";

export default function Main() {
    const allRecords = useSelector(state => state.products.value)
    return <MainWrap>
        <h1>Welcome to WILL E. CO.</h1>
        <h2>Our Products</h2>
        <div className="card-list-wrap">
            {allRecords.map(product => (
                <Link to={`/product/${product.id}`}>
                    <div className="card" key={product.id}>
                        <div className="container">
                            <img src={placeholderImg} alt="product_image" />
                            <h4><b>{product.id}</b></h4>
                            <p>{product.category}</p>
                        </div>
                    </div>
                </Link>
            ))
            }
        </div>


    </MainWrap>
}