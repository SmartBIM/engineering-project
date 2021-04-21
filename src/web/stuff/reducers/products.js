import { ACTIONS } from '../actions';

const initialState = {
  loading: false,
  products: []
}


export default function(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.LOAD_PRODUCTS:
      return { ...state, loading: true }      
    case ACTIONS.DONE_LOADING_PRODUCTS:
      return { ...state, products: action.payload, loading: false }
    case ACTIONS.DONE_LOADING_PRODUCT:
      return { ...state, products: [action.payload], loading: false }
    
    default:
      return state
  }
}
