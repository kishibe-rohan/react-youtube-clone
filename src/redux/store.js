import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { authReducer } from "./reducers/authReducers";
import { popularVideosReducer } from "./reducers/videoReducers";

const reducer = combineReducers({
  auth: authReducer,
  popularVideos: popularVideosReducer,
});

const store = createStore(
  reducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
