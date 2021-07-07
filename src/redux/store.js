import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { authReducer } from "./reducers/authReducers";
import {
  popularVideosReducer,
  specificVideoReducer,
} from "./reducers/videoReducers";
import { channelDetailsReducer } from "./reducers/channelReducers";

const reducer = combineReducers({
  auth: authReducer,
  popularVideos: popularVideosReducer,
  specificVideo: specificVideoReducer,
  channelDetails: channelDetailsReducer,
});

const store = createStore(
  reducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
