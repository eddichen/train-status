import { connect } from "react-redux";
import {
  setDepartureStation,
  setDestinationStation
} from "../actions/setStationActions";
import { fetchStationsRequest, fetchTrainDataRequest } from "../sagas";
import Main from "./Main";

function mapStateToProps(state) {
  return {
    departureData: state.getDepartureData,
    stations: state.getStationNames,
    departureStation: state.setUserStations.departureStation,
    destinationStation: state.setUserStations.destinationStation
  };
}

const bindActionsToDispatch = dispatch => ({
  fetchStationsRequest: () => dispatch(fetchStationsRequest()),
  setDepartureStation: station => dispatch(setDepartureStation(station)),
  setDestinationStation: station => dispatch(setDestinationStation(station)),
  fetchTrainDataRequest: stations => dispatch(fetchTrainDataRequest(stations))
});

export default connect(
  mapStateToProps,
  bindActionsToDispatch
)(Main);
