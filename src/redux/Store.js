import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from 'redux-logger'

import { rootReducers } from "./RootReducers";

const logger = createLogger({
	collapsed: true
});

export const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk, logger))
)
