import { call, put, takeLatest } from "redux-saga/effects";
import * as TYPES from "../types";

const api = url => fetch(url).then(response => response.json());
const accessToken = "accessToken=a568f8a6-3d7a-4c4e-93fd-6623fa286b1d";

export const fetchTrainDataRequest = stations => ({
  type: TYPES.FETCH_TRAIN_DATA_REQUEST,
  stations
});

export function* fetchTrains(stations) {
  const destinationStation = stations.stations.destinationStation;
  let departureFilter = "";

  if (destinationStation !== undefined) {
    departureFilter = `/to/${stations.stations.destinationStation}`;
  }

  try {
    const result = yield call(
      api,
      `https://rail-3.apphb.com/departures/${
        stations.stations.departureStation
      }${departureFilter}?expand=true&${accessToken}`
    );

    yield put({
      type: TYPES.FETCH_TRAIN_DATA_SUCCESS,
      result
    });
  } catch (error) {
    yield put({
      type: TYPES.FETCH_TRAIN_DATA_ERROR,
      error
    });
  }
}

export const fetchStationsRequest = () => ({
  type: TYPES.FETCH_STATIONS_REQUEST
});

function* fetchStations() {
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
  yield takeLatest(TYPES.FETCH_TRAIN_DATA_REQUEST, fetchTrains);
}
