import {SEARCH, THEME} from '../../Types/Types';

const INITIAL_STATE = {
  search: '',
  theme: 'light',
};

const generalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH:
      return {...state, search: action.payload};
    case THEME:
      return {...state, theme: action.payload};
    default:
      return state;
  }
};

export default generalReducer;
