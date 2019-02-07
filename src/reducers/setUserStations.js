import * as TYPES from "../types";

function setUserStations(
  state = {
    departureStation: {},
    destinationStation: {}
  },
  action
) {
  switch (action.type) {
    case TYPES.SET_DEPARTURE_STATION:
      return Object.assign({}, state, {
        departureStation: {
          stationName: action.stationName,
          stationCode: action.stationCode
        }
      });
    case TYPES.SET_DESTINATION_STATION:
      return Object.assign({}, state, {
        destinationStation: {
          stationName: action.stationName,
          stationCode: action.stationCode
        }
      });
    default:
      return state;
  }
}

export default setUserStations;
