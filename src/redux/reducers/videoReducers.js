import {
  HOME_VIDEOS_FAILURE,
  HOME_VIDEOS_REQUEST,
  HOME_VIDEOS_SUCCESS,
} from "../constants";

export const popularVideosReducer = (
  state = {
    videos: [],
    isLoading: false,
    nextPageToken: null,
    activeCategory: "All",
  },
  action
) => {
  switch (action.type) {
    case HOME_VIDEOS_REQUEST:
      return { ...state, isLoading: true };
    case HOME_VIDEOS_SUCCESS:
      return {
        ...state,
        videos: action.payload.videos,
        isLoading: false,
        nextPageToken: action.payload.nextPageToken,
        activeCategory: action.payload.category,
      };
    case HOME_VIDEOS_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};
