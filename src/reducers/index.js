import { combineReducers } from "redux";
import getDepartureData from "./getDepartureData";
import getStationNames from "./getStationNames";

const rootReducer = combineReducers({
  getDepartureData,
  getStationNames
});

export default rootReducer;
