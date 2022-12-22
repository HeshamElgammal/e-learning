import {CHANGE_AUTH} from '../../Types/Types';

export const changeAuth = authValue => {
  return {
    type: CHANGE_AUTH,
    payload: authValue,
  };
};
