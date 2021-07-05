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
    const provider = new firebase.auth.GoogleAuthProvider();
    const res = await auth.signInWithPopup(provider);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
