import {
  START_SIGN_IN,
  SUCCESS_SIGN_IN,
  FAILED_SIGN_IN,
} from '../../Types/Types';

const INITIAL_STATE = {
  signInButtonLoading: false,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_SIGN_IN: {
      return {...state, signInButtonLoading: true};
    }
    case SUCCESS_SIGN_IN: {
      return {...state, signInButtonLoading: false};
    }
    case FAILED_SIGN_IN: {
      return {...state, signInButtonLoading: false};
    }

    default:
      return state;
  }
};

export default authReducer;
