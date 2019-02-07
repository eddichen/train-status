import { combineReducers } from "redux";
import getStationNames from "./getStationNames";
import setUserStations from "./setUserStations";

const rootReducer = combineReducers({
  getStationNames,
  setUserStations
});

export default rootReducer;
