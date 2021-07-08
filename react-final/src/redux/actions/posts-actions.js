import { SET_POSTS } from '../action-types/posts-types';

export const setPosts = (payload) => ({
  type: SET_POSTS,
  payload,
});
