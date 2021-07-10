import { SET_LIKES } from '../action-types/likes-types';

export const setLikes = (payload) => ({
  type: SET_LIKES,
  payload,
});
