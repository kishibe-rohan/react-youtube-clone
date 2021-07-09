import {
  FETCH_COMMENTS_FAILURE,
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAILURE,
} from "../constants";
import request from "../../api";

export const fetchComments = (id) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_COMMENTS_REQUEST });

    const { data } = await request("/commentThreads", {
      params: {
        part: "snippet",
        videoId: id,
        textFormat: "plainText",
      },
    });

    dispatch({ type: FETCH_COMMENTS_SUCCESS, payload: data.items });
  } catch (error) {
    dispatch({ type: FETCH_COMMENTS_FAILURE, payload: error.message });
  }
};

export const addComment = (id, text) => async (dispatch, getState) => {
  try {
    const commentRequest = {
      snippet: {
        videoId: id,
        topLevelComment: {
          snippet: {
            textOriginal: text,
          },
        },
      },
    };

    await request.post("/commentThreads", commentRequest, {
      params: {
        part: "snippet",
      },
      headers: {
        Authorization: `Bearer ${getState().auth.accessToken}`,
      },
    });

    dispatch({ type: ADD_COMMENT_SUCCESS });
  } catch (error) {
    console.log(error.response.data);
    dispatch({
      type: ADD_COMMENT_FAILURE,
    });
  }
};
