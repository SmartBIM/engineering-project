// import { ADD_PRODUCT, REMOVE_PRODUCT, LOAD_PRODUCTS } from "../actionTypes"
import axios from 'axios'

async function getProducts() {
  return axios.get('localhost:8080/api/products')
}


const initialState = [
  {
    id: 'test',
    brand: 'Some Brand',
    category: 'Anvil', 
    description: 'Well it\'s an anvil',
    features: [
      'protection from rain',
      'steel block'
    ]
  },
  {
    id: 'test2',
    brand: 'Other Brand',
    category: 'Hammer', 
    description: 'Thor would be envious',
    features: [
      'Made from pantented Neutron Star matter',
      'Really, really strong'
    ]
  }
]


export default function(state = initialState, action = {}) {
  switch (action.type) {

    // case ADD_PRODUCT: {
    //   const { id, content } = action.payload;
    //   return {
    //     ...state,
    //     allIds: [...state.allIds, id],
    //     byIds: {
    //       ...state.byIds,
    //       [id]: {
    //         content,
    //         completed: false
    //       }
    //     }
    //   };
    // }
    // case REMOVE_PRODUCT: {
    //   const { id } = action.payload;
    //   return {
    //     ...state,
    //     byIds: {
    //       ...state.byIds,
    //       [id]: {
    //         ...state.byIds[id],
    //         completed: !state.byIds[id].completed
    //       }
    //     }
    //   };
    // }
    default:
      return state;
  }
}
