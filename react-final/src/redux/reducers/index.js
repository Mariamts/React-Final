import { combineReducers } from 'redux';
import { commentsReducer } from './commentsReducer';
import { likesReducer } from './likesReducer';
import { postsReducer } from './postsReducer';

import { userReducer } from './userReducer';

const rootReducer = combineReducers({
  user: userReducer,
  posts: postsReducer,
  comments: commentsReducer,
  likes: likesReducer,
});

export default rootReducer;
