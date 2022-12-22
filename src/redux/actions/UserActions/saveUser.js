import {SAVE_USER, UPDATE_PROFILE_DATA} from '../../Types/Types';

export const saveUser = userData => {
  return {
    type: SAVE_USER,
    payload: userData,
  };
};

export const updateUserInfo = (data, avatar) => {
  return {
    type: UPDATE_PROFILE_DATA,
    payload: data,
    avatar: avatar,
  };
};
