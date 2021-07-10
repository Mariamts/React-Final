import { setComments, setLikes, setPosts } from '../actions';
import { COMMENTS, LIKES, POSTS } from '../../utils/constants';
import { AUTO_FILL_DATA } from '../action-types';

export const autoFillDataMiddleware = ({ dispatch }) => {
  return (next) => {
    return (action) => {
      if (action.type === AUTO_FILL_DATA) {
        if (localStorage.getItem(POSTS)) {
          const posts = JSON.parse(localStorage.getItem(POSTS));
          dispatch(setPosts(posts));
        }

        if (localStorage.getItem(COMMENTS)) {
          const comments = JSON.parse(localStorage.getItem(COMMENTS));
          dispatch(setComments(comments));
        }

        if (localStorage.getItem(LIKES)) {
          const likes = JSON.parse(localStorage.getItem(LIKES));
          dispatch(setLikes(likes));
        }
      } else {
        next(action);
      }
    };
  };
};
