// import { LOAD_PRODUCTS } from '../actionTypes'
import axios from 'axios'

// fix
async function getProductStyling() {
  return axios.get('localhost:8080/api/siteStyling')
}

const initialState = [
  {
    id: 1,
    company: 'A Company',
    brand: 'Some Brand',
    font: 'Arial',
    headerColor: 'papayawhip',
    footerColor: 'lightgrey',
    textColor: '#424242',
    buttonColor: '#FFFFFF',
    buttonText: '#ABABAB'
  },
  {
    id: 2,
    company: 'Company B',
    brand: 'Other Brand',
    font: 'Helvetica',
    headerColor: 'blue',
    footerColor: 'green',
    textColor: '#424242',
    buttonColor: '#FFFFFF',
    buttonText: '#ABABAB'
  }
]


export default function(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state
  }
}
