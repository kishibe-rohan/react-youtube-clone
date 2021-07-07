import {
  CHANNEL_DETAILS_FAILURE,
  CHANNEL_DETAILS_REQUEST,
  CHANNEL_DETAILS_SUCCESS,
  CHANNEL_SUBSCRIPTION_STATUS_SUCCESS,
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
