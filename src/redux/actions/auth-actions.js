import { SET_AUTH_GUEST, SET_AUTH_USER } from '../action-types/auth-types';

export const setAuthUserAction = (token, id) => ({
  type: SET_AUTH_USER,
  token,
  id,
});

export const setAuthGuestAction = () => ({
  type: SET_AUTH_GUEST,
});
