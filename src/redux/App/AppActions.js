export const APP_INITIALIZE = "APP_INITIALIZE";
export const appInitialize = () => {
  return dispatch => {
    dispatch({
      type: APP_INITIALIZE
    });
  }
};