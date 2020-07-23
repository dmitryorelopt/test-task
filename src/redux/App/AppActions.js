import { dataService } from '../../service/DataService';

export const GET_ALL_DATA_REQUEST = "GET_ALL_DATA_REQUEST";
export const GET_ALL_DATA_SUCCESS = "GET_ALL_DATA_SUCCESS";
export const GET_ALL_DATA_ERROR = "GET_ALL_DATA_ERROR";
export const getAllData = () => {
  return async dispatch => {
    dispatch({
      type: GET_ALL_DATA_REQUEST
    });
    try {
      const data = await dataService.getTableData();
      dispatch({
        type: GET_ALL_DATA_SUCCESS,
        payload: {
          data
        }
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_DATA_ERROR,
        payload: {
          errorMessage: error.message
        }
      });
    }
  }
};