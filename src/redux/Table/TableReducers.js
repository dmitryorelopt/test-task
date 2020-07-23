import { GET_ALL_DATA_REQUEST, GET_ALL_DATA_SUCCESS } from '../App/AppActions';

const initializeState = {
  records: []
};

export function TableReducers(
  state = initializeState,
  action
) {
  switch (action.type) {
    case GET_ALL_DATA_REQUEST: {
      return {
        ...state,
        records: [],
      };
    }
    case GET_ALL_DATA_SUCCESS: {
      return {
        records: [...action.payload.data.Team]
      };
    }
    default: {
      return state;
    }
  }
}
