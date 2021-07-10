import * as actionType from '../action-types/comments-types';

const initialState = {
  comments: [],
};

export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_COMMENTS:
      return {
        ...state,
        comments: action.payload,
      };

    default:
      return state;
  }
};
