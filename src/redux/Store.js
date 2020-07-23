import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from 'redux-logger'

import { rootReducers } from "./RootReducers";

const logger = createLogger({
	collapsed: true
});

const middlewares = [logger];

export const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(...middlewares))
);
