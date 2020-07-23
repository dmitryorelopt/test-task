import { APP_INITIALIZE } from './AppActions';

const initializeState = {
  nextState: "init"
};

export function AppReducers(
  state = initializeState,
  action
) {
  switch (action.type) {
    case APP_INITIALIZE: {
      return state;
    }
    default: {
      return state;
    }
  }
}
