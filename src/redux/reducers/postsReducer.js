import * as actionType from '../action-types/posts-types';

const initialState = {
  posts: [],
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };

    default:
      return state;
  }
};
