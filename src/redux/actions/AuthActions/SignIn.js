import {START_SIGN_IN, SUCCESS_SIGN_IN, FAILED_SIGN_IN} from '../../Types/Types';

export const startSignIn = () => {
  return {
    type: START_SIGN_IN,
  };
};

export const successSignIn = () => {
  return {
    type: SUCCESS_SIGN_IN,
  };
};

export const failedSignIn = () => {
  return {
    type: FAILED_SIGN_IN,
  };
};