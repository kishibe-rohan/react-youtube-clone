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

export const getSubscribedChannels = () => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_SUBSCRIPTIONS_REQUEST });

    const { data } = await request("/subscriptions", {
      params: {
        part: "snippet,contentDetails",
        mine: true,
        maxResults: 20,
      },
      headers: {
        Authorization: `Bearer ${getState().auth.accessToken}`,
      },
    });

    dispatch({
      type: USER_SUBSCRIPTIONS_SUCCESS,
      payload: data.items,
    });
  } catch (error) {
    dispatch({ type: USER_SUBSCRIPTIONS_FAILURE, payload: error.message });
  }
};

export const getVideosByChannel = (id) => async (dispatch) => {
  try {
    dispatch({
      type: CHANNEL_VIDEOS_REQUEST,
    });

    const {
      data: { items },
    } = await request("/channels", {
      params: {
        part: "contentDetails",
        id: id,
      },
    });

    const uploadPlaylistId = items[0].contentDetails.relatedPlaylists.uploads;
    const { data } = await request("/playlistItems", {
      params: {
        part: "snippet,contentDetails",
        playlistId: uploadPlaylistId,
        maxResults: 20,
      },
    });

    dispatch({
      type: CHANNEL_VIDEOS_SUCCESS,
      payload: data.items,
    });
  } catch (error) {
    dispatch({ type: CHANNEL_VIDEOS_FAILURE, payload: error.message });
  }
};
