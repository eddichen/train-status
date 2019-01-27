import { connect } from "react-redux";
import { fetchTrainDataRequest, fetchStationNameRequest } from "../actions";
import Main from "./Main";

function mapStateToProps(state) {
  return {
    departureData: state.getDepartureData,
    stationNames: state.getStationNames
  };
}

const bindActionsToDispatch = dispatch => ({
  fetchTrainDataRequest: () => dispatch(fetchTrainDataRequest()),
  fetchStationNameRequest: () => dispatch(fetchStationNameRequest())
});

const App = connect(
  mapStateToProps,
  bindActionsToDispatch
)(Main);

export default App;
