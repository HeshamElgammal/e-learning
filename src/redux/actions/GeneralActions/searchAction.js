import {SEARCH} from '../../Types/Types';

export const changeSearch = data => {
  return {
    type: SEARCH,
    payload: data,
  };
};
