import {
  CHANNEL_DETAILS_FAILURE,
  CHANNEL_DETAILS_REQUEST,
  CHANNEL_DETAILS_SUCCESS,
  CHANNEL_SUBSCRIPTION_STATUS_SUCCESS,
  CHANNEL_VIDEOS_REQUEST,
  CHANNEL_VIDEOS_SUCCESS,
  CHANNEL_VIDEOS_FAILURE,
  USER_SUBSCRIPTIONS_FAILURE,
  USER_SUBSCRIPTIONS_REQUEST,
  USER_SUBSCRIPTIONS_SUCCESS,
} from "../constants";

export const channelDetailsReducer = (
  state = {
    isLoading: true,
    channel: {},
    isSubscribed: false,
  },
  action
) => {
  switch (action.type) {
    case CHANNEL_DETAILS_REQUEST:
      return { ...state, isLoading: true };
    case CHANNEL_DETAILS_SUCCESS:
      return { ...state, isLoading: false, channel: action.payload };
    case CHANNEL_DETAILS_FAILURE:
      return {
        ...state,
        isLoading: false,
        channel: null,
        error: action.payload,
      };
    case CHANNEL_SUBSCRIPTION_STATUS_SUCCESS:
      return { ...state, isSubscribed: action.payload };

    default:
      return state;
  }
};

export const subscriptionsChannelReducer = (
  state = {
    isLoading: true,
    videos: [],
  },
  action
) => {
  switch (action.type) {
    case USER_SUBSCRIPTIONS_REQUEST:
      return { ...state, isLoading: true };
    case USER_SUBSCRIPTIONS_SUCCESS:
      return { ...state, isLoading: false, videos: action.payload };
    case USER_SUBSCRIPTIONS_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};

export const channelVideosReducer = (
  state = {
    isLoading: true,
    videos: [],
  },
  action
) => {
  switch (action.type) {
    case CHANNEL_VIDEOS_REQUEST:
      return { ...state, isLoading: true };
    case CHANNEL_VIDEOS_SUCCESS:
      return { ...state, isLoading: false, videos: action.payload };
    case CHANNEL_VIDEOS_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};
