import { call, put } from "redux-saga/effects";
import * as TYPES from "../types";

const api = url => fetch(url).then(response => response.json());

export const fetchTrainDataRequest = () => ({
  type: TYPES.FETCH_TRAIN_DATA_REQUEST
});

export function* fetchTrains(action) {
  try {
    const trainServices = yield call(
      api,
      "https://rail-3.apphb.com/departues/SYH/to/VIC?accessToken=a568f8a6-3d7a-4c4e-93fd-6623fa286b1d"
    );

    yield put({
      type: TYPES.FETCH_TRAIN_DATA_SUCCESS,
      result: trainServices
    });
  } catch (e) {
    console.log(e);
  }
}
