import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { authReducer } from "./reducers/authReducers";
import {
  likedVideosReducer,
  popularVideosReducer,
  relatedVideosReducer,
  searchVideosReducer,
  specificVideoReducer,
} from "./reducers/videoReducers";
import {
  channelDetailsReducer,
  channelVideosReducer,
  subscriptionsChannelReducer,
} from "./reducers/channelReducers";
import { commentsListReducer } from "./reducers/commentReducer";

const reducer = combineReducers({
  auth: authReducer,
  popularVideos: popularVideosReducer,
  specificVideo: specificVideoReducer,
  relatedVideos: relatedVideosReducer,
  searchVideos: searchVideosReducer,
  likedVideos: likedVideosReducer,
  channelDetails: channelDetailsReducer,
  subscriptionChannels: subscriptionsChannelReducer,
  channelVideos: channelVideosReducer,
  commentsList: commentsListReducer,
});

const store = createStore(
  reducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
