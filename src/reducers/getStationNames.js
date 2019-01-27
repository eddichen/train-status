import * as TYPES from "../types";

function getStationNames(
  state = {
    isFetching: false,
    stationNames: [],
    error: {}
  },
  action
) {
  switch (action.type) {
    case TYPES.FETCH_STATION_NAMES_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case TYPES.FETCH_STATION_NAMES_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        stationNames: action.stationNames
      });
    case TYPES.FETCH_STATION_NAMES_ERROR:
      return Object.assign({}, state, {
        error: action.error
      });
    default:
      return state;
  }
}

export default getStationNames;
