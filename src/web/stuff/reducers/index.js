import { combineReducers } from 'redux'
import products from './products'
import siteStyling from './siteStyling'

export default combineReducers({
  productList: products,
  siteStyling
})
