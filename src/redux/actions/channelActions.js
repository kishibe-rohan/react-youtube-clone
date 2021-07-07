import {
  CHANNEL_DETAILS_FAILURE,
  CHANNEL_DETAILS_REQUEST,
  CHANNEL_DETAILS_SUCCESS,
  CHANNEL_SUBSCRIPTION_STATUS_SUCCESS,
} from "../constants";
import request from "../../api";

export const getChannelDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: CHANNEL_DETAILS_REQUEST,
    });

    const { data } = await request("/channels", {
      params: {
        part: "snippet,contentDetails,statistics",
        id,
      },
    });

    dispatch({
      type: CHANNEL_DETAILS_SUCCESS,
      payload: data.items[0],
    });
  } catch (error) {
    dispatch({
      type: CHANNEL_DETAILS_FAILURE,
      payload: error.response.data,
    });
  }
};

export const checkSubscriptionStatus = (id) => async (dispatch, getState) => {
  try {
    const { data } = await request("/subscriptions", {
      params: {
        part: "snippet",
        forChannelId: id,
        mine: true,
      },
      headers: {
        Authorization: `Bearer ${getState().auth.accessToken}`,
      },
    });

    dispatch({
      type: CHANNEL_SUBSCRIPTION_STATUS_SUCCESS,
      payload: data.items.length !== 0,
    });
  } catch (error) {
    console.log(error);
  }
};
