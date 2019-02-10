import { combineReducers } from "redux";
import getStationNames from "./getStationNames";
import setUserStations from "./setUserStations";
import getDepartureData from "./getDepartureData";

const rootReducer = combineReducers({
  getStationNames,
  setUserStations,
  getDepartureData
});

export default rootReducer;
