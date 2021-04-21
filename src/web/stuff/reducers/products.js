// import { ADD_PRODUCT, REMOVE_PRODUCT, LOAD_PRODUCTS } from '../actionTypes'
import axios from 'axios'

async function getProducts() {
  return axios.get('localhost:8080/api/products')
}


const initialState = [
  {
    id: 'test-id-1',
    brand: 'Some Brand',
    category: 'Anvil', 
    description: 'Well it\'s an anvil',
    features: [
      'protection from rain',
      'steel block'
    ],
    resources: [
      // no idea
    ],
    media: [
      "https://res.cloudinary.com/teepublic/image/private/s--NCVmrvgD--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_000000,e_outline:48/co_000000,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1565201622/production/designs/5541196_0.jpg"
    ]
  },
  {
    id: 'test-id-2',
    brand: 'Other Brand',
    category: 'Hammer', 
    description: 'Thor would be envious',
    features: [
      'Made from pantented Neutron Star matter',
      'Really, really strong'
    ],
    resources: [
      // no idea
    ],
    media: [
      "https://res.cloudinary.com/teepublic/image/private/s--NCVmrvgD--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_000000,e_outline:48/co_000000,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1565201622/production/designs/5541196_0.jpg"
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
