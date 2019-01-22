import { call, put } from "redux-saga/effects";
import departureDataAPI from "../apis/departureData";

export function* departureDataFetch(action) {
  const response = yield call(departureDataAPI.get(), "/departues/SYH/to/VIC");
  const payload = response ? response.data : {};
  // send returned object back to reducer as payload:
  yield put({ type: "RECEIVE_DATA", payload });
}
