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
    case TYPES.FETCH_STATIONS_REQUEST:
      return { ...state, isFetching: true };
    case TYPES.FETCH_STATIONS_SUCCESS:
      return { ...state, isFetching: false, stationNames: action.stationNames };
    case TYPES.FETCH_STATIONS_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
}

export default getStationNames;
