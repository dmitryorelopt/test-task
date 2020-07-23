import { combineReducers } from "redux";
import { AppReducers } from "./App/AppReducers";
import { TeamReducers } from "./Team/TeamReducers";
import { TableReducers } from "./Table/TableReducers";

export const rootReducers = combineReducers({
  app: AppReducers,
  team: TeamReducers,
  table: TableReducers
});
