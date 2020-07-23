import { GET_ALL_DATA_REQUEST } from './AppActions';
import { GET_ALL_DATA_SUCCESS } from './AppActions';
import { GET_ALL_DATA_ERROR } from './AppActions';

const initializeState = {
  loading: false,
  errorMessage: null,
  data: null
};

export function AppReducers(
  state = initializeState,
  action
) {
  switch (action.type) {
    case GET_ALL_DATA_REQUEST: {
      return {
        ...state,
        loading: true,
        errorMessage: null,
        data: null
      };
    }
    case GET_ALL_DATA_SUCCESS: {
      return {
        ...state,
        loading: false,
        errorMessage: null,
        data: action.payload.data
      };
    }
    case GET_ALL_DATA_ERROR: {
      return {
        ...state,
        loading: false,
        errorMessage: action.payload.errorMessage,
        data: null
      };
    }
    default: {
      return state;
    }
  }
}
