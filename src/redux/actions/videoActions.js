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
} from "../constants";
import request from "../../api";

export const getPopularVideos = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: HOME_VIDEOS_REQUEST,
    });

    const { data } = await request("/videos", {
      params: {
        part: "snippet,contentDetails,statistics",
        chart: "mostPopular",
        regionCode: "US",
        maxResults: 20,
        pageToken: getState().popularVideos.nextPageToken,
      },
    });

    dispatch({
      type: HOME_VIDEOS_SUCCESS,
      payload: {
        videos: data.items,
        nextPageToken: data.nextPageToken,
        category: "All",
      },
    });
  } catch (error) {
    dispatch({
      type: HOME_VIDEOS_FAILURE,
      payload: error.message,
    });
  }
};

export const getVideosByCategory = (keyword) => async (dispatch, getState) => {
  try {
    dispatch({
      type: HOME_VIDEOS_REQUEST,
    });

    const { data } = await request("/search", {
      params: {
        part: "snippet",
        maxResults: 20,
        pageToken: getState().popularVideos.nextPageToken,
        q: keyword,
        type: "video",
      },
    });

    dispatch({
      type: HOME_VIDEOS_SUCCESS,
      payload: {
        videos: data.items,
        nextPageToken: data.nextPageToken,
        category: keyword,
      },
    });
  } catch (error) {
    dispatch({
      type: HOME_VIDEOS_FAILURE,
      payload: error.message,
    });
  }
};

export const getVideoById = (id) => async (dispatch) => {
  try {
    dispatch({
      type: SPECIFIC_VIDEO_REQUEST,
    });

    const { data } = await request("/videos", {
      params: {
        part: "snippet,statistics",
        id,
      },
    });

    dispatch({
      type: SPECIFIC_VIDEO_SUCCESS,
      payload: data.items[0],
    });
  } catch (error) {
    dispatch({ type: SPECIFIC_VIDEO_FAILURE, payload: error.message });
  }
};

export const getRelatedVideos = (id) => async (dispatch) => {
  try {
    dispatch({
      type: RELATED_VIDEO_REQUEST,
    });

    const { data } = await request("/search", {
      params: {
        part: "snippet",
        maxResults: 10,
        relatedToVideoId: id,
        type: "video",
      },
    });

    dispatch({
      type: RELATED_VIDEO_SUCCESS,
      payload: data.items,
    });
  } catch (error) {
    dispatch({
      type: RELATED_VIDEO_FAILURE,
      payload: error.response.data.message,
    });
  }
};
