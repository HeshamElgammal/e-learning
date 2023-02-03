import {SEARCH, THEME} from '../../Types/Types';

export const changeTheme = data => {
  return {
    type: THEME,
    payload: data,
  };
};
