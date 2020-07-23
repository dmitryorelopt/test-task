import { createStore, applyMiddleware } from "redux";

import { rootReducers } from "./RootReducers";
import { composeWithDevTools } from "redux-devtools-extension";

const middlewares = [];

export const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(...middlewares))
);
