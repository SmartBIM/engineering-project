import { ACTIONS } from "../actions"

const initialState = []

export default function(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.DONE_LOADING_STYLING:
      return action.payload

    default:
      return state
  }
}
