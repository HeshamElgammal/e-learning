import {
  START_CHANGE_PASSWORD,
  SUCCESS_CHANGE_PASSWORD,
  FAILED_CHANGE_PASSWORD,
} from '../../Types/Types';

export const startChangePass = () => {
  return {
    type: START_CHANGE_PASSWORD,
  };
};

export const successChangePass = () => {
  return {
    type: SUCCESS_CHANGE_PASSWORD,
  };
};

export const failedChangePass = () => {
  return {
    type: FAILED_CHANGE_PASSWORD,
  };
};
