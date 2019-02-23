import * as TYPES from "../types";

function getDepartureData(
  state = {
    isFetching: false,
    trains: [],
    error: {}
  },
  action
) {
  switch (action.type) {
    case TYPES.FETCH_TRAIN_DATA_REQUEST:
      return { ...state, isFetching: true };
    case TYPES.FETCH_TRAIN_DATA_SUCCESS:
      return { ...state, isFetching: false, trains: action.result };
    case TYPES.FETCH_TRAIN_DATA_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
}

export default getDepartureData;
