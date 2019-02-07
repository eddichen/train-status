import { connect } from "react-redux";
import {
  setDepartureStation,
  setDestinationStation,
  fetchStationsRequest
} from "../sagas";
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
  setDestinationStation: station => dispatch(setDestinationStation(station))
});

const App = connect(
  mapStateToProps,
  bindActionsToDispatch
)(Main);

export default App;
