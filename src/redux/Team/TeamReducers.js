import { GET_ALL_DATA_REQUEST, GET_ALL_DATA_SUCCESS } from "../App/AppActions";

const initializeState = [];

export function TeamReducers(state = initializeState, action) {
  switch (action.type) {
    case GET_ALL_DATA_REQUEST: {
      return [];
    }
    case GET_ALL_DATA_SUCCESS: {
      return [...action.payload.data.Competition.TeamStandings.TeamRecord];
    }
    default: {
      return state;
    }
  }
}
