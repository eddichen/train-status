import { call, put, take, takeLatest } from "redux-saga/effects";
import * as TYPES from "../types";

const api = url => fetch(url).then(response => response.json());
const accessToken = "accessToken=a568f8a6-3d7a-4c4e-93fd-6623fa286b1d";

const fetchTrainDataRequest = () => ({
  type: TYPES.FETCH_TRAIN_DATA_REQUEST
});

function* fetchTrains(action) {
  try {
    const trainServices = yield call(
      api,
      `https://rail-3.apphb.com/departues/SYH/to/VIC?${accessToken}`
    );

    yield put({
      type: TYPES.FETCH_TRAIN_DATA_SUCCESS,
      result: trainServices
    });
  } catch (e) {
    console.log(e);
  }
}

export const fetchStationsRequest = () => ({
  type: TYPES.FETCH_STATIONS_REQUEST
});

export function* fetchStations(action) {
  console.log("entered");
  try {
    const stationNames = yield call(
      api,
      `https://rail-3.apphb.com/crs?${accessToken}`
    );

    yield put({
      type: TYPES.FETCH_STATIONS_SUCCESS,
      stationNames
    });
  } catch (error) {
    yield put({
      type: TYPES.FETCH_STATIONS_ERROR,
      error
    });
  }
}

export default function* rootSaga() {
  yield takeLatest(TYPES.FETCH_STATIONS_REQUEST, fetchStations);
}
