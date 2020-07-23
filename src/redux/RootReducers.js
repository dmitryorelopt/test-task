import { combineReducers } from "redux";
import { AppReducers } from "./App/AppReducers";

export const rootReducers = combineReducers({
  app: AppReducers
});
