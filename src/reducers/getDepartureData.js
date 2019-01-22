import * as TYPES from "../types";

function getDepartureData(
  state = {
    isFetching: false,
    trainServices: [],
    error: {}
  },
  action
) {
  switch (action.type) {
    case TYPES.FETCH_TRAIN_DATA_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case TYPES.FETCH_TRAIN_DATA_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        trainServices: action.result.trainServices,
        error: action.error
      });
    default:
      return state;
  }
}

export default getDepartureData;
