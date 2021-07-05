import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOG_OUT,
  GET_USER_PROFILE,
} from "../constants";

const initialState = {
  accessToken: sessionStorage.getItem("yt-access-token")
    ? sessionStorage.getItem("yt-access-token")
    : null,
  userProfile: sessionStorage.getItem("yt-user-profile")
    ? JSON.parse(sessionStorage.getItem("yt-user-profile"))
    : null,
  isLoading: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case LOGIN_SUCCESS:
      return { ...state, accessToken: action.payload, isLoading: false };
    case LOGIN_FAILURE:
      return {
        ...state,
        accessToken: null,
        error: action.payload,
        isLoading: false,
      };
    case GET_USER_PROFILE:
      return { ...state, userProfile: action.payload };
    case LOG_OUT:
      return { ...state, accessToken: null, userProfile: null };

    default:
      return state;
  }
};
