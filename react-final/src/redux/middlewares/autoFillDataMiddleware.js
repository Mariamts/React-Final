import { setComments, setLikes, setPosts } from '../actions';
import { AUTH_TOKEN } from '../../utils/constants';
import { AUTO_FILL_DATA, AUTO_FILL_POSTS } from '../action-types';

export const autoFillDataMiddleware = ({ dispatch }) => {
  return (next) => {
    return (action) => {
      if (action.type === AUTO_FILL_DATA) {
        if (localStorage.getItem('posts')) {
          const posts = JSON.parse(localStorage.getItem('posts'));
          dispatch(setPosts(posts));
        }

        if (localStorage.getItem('comments')) {
          const comments = JSON.parse(localStorage.getItem('comments'));
          dispatch(setComments(comments));
        }

        if (localStorage.getItem('likes')) {
          const likes = JSON.parse(localStorage.getItem('likes'));
          dispatch(setLikes(likes));
        }
      } else {
        next(action);
      }
    };
  };
};
