import { AUTHENTICATIONS } from '../../../utils/config';
import {
  START_SIGN_IN,
  SUCCESS_SIGN_IN,
  FAILED_SIGN_IN,
  CHANGE_AUTH,
  SAVE_USER
} from '../../Types/Types';

const INITIAL_STATE = {
  authenticated: AUTHENTICATIONS.NOT_AUTHENTICATED,
  user: null,
  phone: null,
  fcmToken: '',
 
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_AUTH: {
      return {...state, authenticated: action.payload};
    }
    case SAVE_USER: {
      return {...state, user: action.payload};
    }
    default:
      return state;
  }
};

export default userReducer;
