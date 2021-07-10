import * as actionType from '../action-types/likes-types';

const initialState = {
  likes: [],
};

export const likesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_LIKES:
      return {
        ...state,
        likes: action.payload,
      };

    default:
      return state;
  }
};
