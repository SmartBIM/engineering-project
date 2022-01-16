import React from "react";
import styled from "styled-components";
import { MainWrap } from "../styles/common";
import { useParams } from 'react-router-dom'
import placeholderImg from '../../src/assets/prod_placeholder_image.png';
import { useSelector } from "react-redux";

const ProductWrap = styled.div`
text-align: left;
padding: 20px 50px;
font-size: 30px;
`;
const GridContainer = styled.div`
display: grid;
grid-template-areas:
  'main main main main right right'
  'main main main main right right'
  'footer footer footer footer footer footer';
grid-gap: 20px;
padding: 20px;
`;
const MainArea = styled.div`
grid-area: main;
border: 2px solid;
min-height: 300px;
display: flex;
p {
    padding: 0px;
    margin: 0px;
    font-size: 25px
}
.field-info {
    margin: 15px;
}
.dflex {
    display:flex;
}
`;
const Actions = styled.div`
grid-area: right;
border: 2px solid;
min-height: 100px;
align-self: center;
text-align: center;
button {
    margin: 10px 10px;
    border-radius: 0px;
    background-color: red;
    color: #fff;
    box-shadow: none;
}
`;
const Tabs = styled.div`
grid-area: footer;
border: 2px solid;
min-height: 100px;
ul {
    list-style-type: none;
    li {
        margin: 0px 15px;
        text-decoration: none;
        display: inline;
        cursor: pointer;
    }
    .active {
        font-weight: bold;
    }
}
`;

const H4 = styled.h4`
margin: 0px;
padding: 0px;
text-transform: uppercase;
`;


export default function Product(props) {
    const [cartCount, setCartCount] = React.useState(0);
    const [tabIndex, setTabIndex] = React.useState(0);
    const { id } = useParams()
    const allRecords = useSelector(state => state.products.value)
    const prodInfo = allRecords.find(prod => prod.id === id)
    return (<MainWrap>
        <ProductWrap>
            {id}
            <GridContainer>
                {tabIndex == 0 ?
                    <MainArea>
                        <div>
                            <img src={placeholderImg} alt="placeholder" />
                        </div>
                        <div>
                            <div className="dflex">
                                <div className="field-info">
                                    <H4>Brand </H4>
                                    <p> {prodInfo.brand} </p>
                                </div>
                                <div className="field-info">
                                    <H4>Category</H4>
                                    <p>{prodInfo.category}</p>
                                </div>
                            </div>
                            <div className="field-info">
                                <H4>Description</H4>
                                <p>{prodInfo.description}</p>
                            </div>
                            <div className="field-info">
                                <p>FEATURES </p>
                                <ul>
                                    {prodInfo.features.map(i => (
                                        <li>{i}</li>
                                    ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </MainArea>
                    : tabIndex === 1 ?
                        <h3>Resources</h3>
                        : tabIndex === 2 ?
                            <h3>Others</h3>
                            : null
                }
                {tabIndex === 0 ?
                <Actions>
                    <>
                    <button onClick={() => setCartCount(cartCount + 1)}>
                        + Add Product
                        {cartCount ? `(${cartCount})` : ''}
                    </button>
                    <button onClick={() => setCartCount(cartCount - 1)}>
                        - Delete Product
                    </button>
                    </>
                </Actions>  : null
                }

                <Tabs>
                    <ul>
                        <li onClick={() => setTabIndex(0)}  className={tabIndex === 0 ? 'active' : ''}>Product Information</li>
                        <li onClick={() => setTabIndex(1)}  className={tabIndex === 1 ? 'active' : ''}>Resources</li>
                        <li onClick={() => setTabIndex(2)}  className={tabIndex === 2 ? 'active' : ''}>other</li>
                    </ul>

                </Tabs>
            </GridContainer>
        </ProductWrap>
    </MainWrap>)
}