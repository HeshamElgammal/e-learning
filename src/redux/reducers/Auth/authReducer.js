import {
  START_SIGN_IN,
  SUCCESS_SIGN_IN,
  FAILED_SIGN_IN,
  START_CHANGE_PASSWORD,
  SUCCESS_CHANGE_PASSWORD,
  FAILED_CHANGE_PASSWORD
} from '../../Types/Types';

const INITIAL_STATE = {
  signInButtonLoading: false,
  changePassButtonLoading: false,
  serverError: false,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_SIGN_IN: {
      return {...state, signInButtonLoading: true, serverError: false};
    }
    case SUCCESS_SIGN_IN: {
      return {...state, signInButtonLoading: false, serverError: false};
    }
    case FAILED_SIGN_IN: {
      return {...state, signInButtonLoading: false, serverError: true};
    }
    case START_CHANGE_PASSWORD: {
      return {...state, changePassButtonLoading: true, serverError: false};
    }
    case SUCCESS_CHANGE_PASSWORD: {
      return {...state, changePassButtonLoading: false, serverError: false};
    }
    case FAILED_CHANGE_PASSWORD: {
      return {...state, changePassButtonLoading: false, serverError: true};
    }

    default:
      return state;
  }
};

export default authReducer;
