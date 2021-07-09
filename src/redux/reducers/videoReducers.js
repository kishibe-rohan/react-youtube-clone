import {
  HOME_VIDEOS_FAILURE,
  HOME_VIDEOS_REQUEST,
  HOME_VIDEOS_SUCCESS,
  SPECIFIC_VIDEO_FAILURE,
  SPECIFIC_VIDEO_REQUEST,
  SPECIFIC_VIDEO_SUCCESS,
  RELATED_VIDEO_FAILURE,
  RELATED_VIDEO_SUCCESS,
  RELATED_VIDEO_REQUEST,
  SEARCH_VIDEO_REQUEST,
  SEARCH_VIDEO_FAILURE,
  SEARCH_VIDEO_SUCCESS,
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

export const specificVideoReducer = (
  state = {
    isLoading: true,
    video: null,
  },
  action
) => {
  switch (action.type) {
    case SPECIFIC_VIDEO_REQUEST:
      return { ...state, isLoading: true };
    case SPECIFIC_VIDEO_SUCCESS:
      return { ...state, isLoading: false, video: action.payload };
    case SPECIFIC_VIDEO_FAILURE:
      return { ...state, isLoading: false, video: null, error: action.payload };
    default:
      return state;
  }
};

export const relatedVideosReducer = (
  state = {
    isLoading: true,
    videos: [],
  },
  action
) => {
  switch (action.type) {
    case RELATED_VIDEO_REQUEST:
      return { ...state, isLoading: true };
    case RELATED_VIDEO_SUCCESS:
      return { ...state, isLoading: false, videos: action.payload };
    case RELATED_VIDEO_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const searchVideosReducer = (
  state = {
    isLoading: true,
    videos: [],
  },
  action
) => {
  switch (action.type) {
    case SEARCH_VIDEO_REQUEST:
      return { ...state, isLoading: true };
    case SEARCH_VIDEO_SUCCESS:
      return { ...state, isLoading: false, videos: action.payload };
    case SEARCH_VIDEO_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
