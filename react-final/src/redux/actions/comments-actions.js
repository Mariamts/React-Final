import { SET_COMMENTS } from '../action-types/comments-types';

export const setComments = (payload) => ({
  type: SET_COMMENTS,
  payload,
});
