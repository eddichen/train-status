import * as TYPES from "../types";

export const setDepartureStation = action => ({
  type: TYPES.SET_DEPARTURE_STATION,
  stationName: action.stationName,
  stationCode: action.stationCode
});

export const setDestinationStation = action => ({
  type: TYPES.SET_DESTINATION_STATION,
  stationName: action.stationName,
  stationCode: action.stationCode
});
