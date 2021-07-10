import { setAuthUserAction } from '../actions';
import { AUTO_LOGIN } from '../action-types';
import { AUTH_TOKEN, USER_ID } from '../../utils/constants';

export const autoLoginMiddleware = ({ dispatch }) => {
  return (next) => {
    return (action) => {
      if (action.type === AUTO_LOGIN) {
        if (localStorage.getItem(AUTH_TOKEN)) {
          const token = JSON.parse(localStorage.getItem(AUTH_TOKEN));
          const id = JSON.parse(localStorage.getItem(USER_ID));
          dispatch(setAuthUserAction(token, id));
        }
      } else {
        next(action);
      }
    };
  };
};
