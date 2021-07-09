import {
  FETCH_COMMENTS_FAILURE,
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
} from "../constants";

export const commentsListReducer = (
  state = {
    comments: [],
    isLoading: false,
  },
  action
) => {
  switch (action.type) {
    case FETCH_COMMENTS_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_COMMENTS_SUCCESS:
      return { ...state, isLoading: false, comments: action.payload };
    case FETCH_COMMENTS_FAILURE: {
      return { ...state, isLoading: false, error: action.payload };
    }
    default:
      return state;
  }
};
