import { appActions } from "./AppActions";

const initializeState = {
  nextState: "init"
};

export function AppReducers(
  state = initializeState,
  action
) {
  switch (action.type) {
    case appActions.APP_INITIALIZE: {
      return {
        ...state,
        nextState: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
