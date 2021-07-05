import firebase from "firebase/app";

import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOG_OUT,
  GET_USER_PROFILE,
} from "../constants";

import auth from "../../firebase";

export const login = () => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    });

    const provider = new firebase.auth.GoogleAuthProvider();
    const res = await auth.signInWithPopup(provider);
    const accessToken = res.credential.accessToken;

    const profile = {
      name: res.additionalUserInfo.profile.name,
      picture: res.additionalUserInfo.profile.picture,
    };

    sessionStorage.setItem("yt-access-token", accessToken);
    sessionStorage.setItem("yt-user-profile", JSON.stringify(profile));

    dispatch({ type: LOGIN_SUCCESS, payload: accessToken });

    dispatch({ type: GET_USER_PROFILE, payload: profile });
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: error.message });
  }
};

export const logout = () => async (dispatch) => {
  await auth.signOut();
  dispatch({ type: LOG_OUT });

  sessionStorage.removeItem("yt-access-token");
  sessionStorage.removeItem("yt-user-profile");
};
