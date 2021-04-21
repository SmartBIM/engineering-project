import axios from 'axios'

export const ACTIONS = {
  LOAD_PRODUCTS: 'PRODUCT/LOAD_PRODUCTS',
  DONE_LOADING_PRODUCTS: 'PRODUCT/DONE_LOADING_PRODUCTS',
  DONE_LOADING_PRODUCT: 'PRODUCT/DONE_LOADING_PRODUCT',
  DONE_LOADING_STYLING: 'SITE_STYLING/DONE_LOADING_STYLING'
}

export const getProducts = () => async dispatch => {
  try {
    const { data } = await axios.get('http://localhost:8080/api/products')
    dispatch({
      type: ACTIONS.DONE_LOADING_PRODUCTS,
      payload: data
    })
  } catch(e) {
    console.log(e)
  }
}

export const loadProduct = (productId) => async dispatch => {
  try {
    const { data } = await axios.get(`http://localhost:8080/api/products/${productId}`)
    dispatch({
      type: ACTIONS.DONE_LOADING_PRODUCT,
      payload: data
    })
  } catch(e) {
    console.log(e)
  }
}

export const loadStylingByProductId = () => async dispatch => {
  console.log('sdfsdfsdfsdfsdfsdfsdfsgsfgaghae')
  try {
    const { data } = await axios.get('http://localhost:8080/api/siteStylings')
    dispatch({
      type: ACTIONS.DONE_LOADING_STYLING,
      payload: data
    })
  } catch(e) {
    debugger
    console.log(e)
  }
}