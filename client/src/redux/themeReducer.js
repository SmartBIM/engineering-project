import * as Actions from './themeActions';
import { whiteTheme } from '../themes';

const initialState = {
  theme: whiteTheme
};

export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.APPLY_THEME:
      return Object.assign({}, { theme: action.payload } );
    default:
     return state;
  }
};