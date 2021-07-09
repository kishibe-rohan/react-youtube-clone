import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { authReducer } from "./reducers/authReducers";
import {
  popularVideosReducer,
  relatedVideosReducer,
  specificVideoReducer,
} from "./reducers/videoReducers";
import { channelDetailsReducer } from "./reducers/channelReducers";
import { commentsListReducer } from "./reducers/commentReducer";

const reducer = combineReducers({
  auth: authReducer,
  popularVideos: popularVideosReducer,
  specificVideo: specificVideoReducer,
  relatedVideos: relatedVideosReducer,
  channelDetails: channelDetailsReducer,
  commentsList: commentsListReducer,
});

const store = createStore(
  reducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
