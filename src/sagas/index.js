//import all saga methods for each individual component
import { takeLatest } from "redux-saga/effects";
import * as TYPES from "../types";
import { fetchTrains } from "../actions";

function* mySaga() {
  yield takeLatest(TYPES.FETCH_TRAIN_DATA_REQUEST, fetchTrains);
}

export default mySaga;
