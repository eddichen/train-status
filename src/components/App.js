import { connect } from "react-redux";
import { fetchTrainDataRequest } from "../actions";
import Main from "./Main";

function mapStateToProps(state) {
  return {
    departureData: state.getDepartureData
  };
}

const bindActionsToDispatch = dispatch => ({
  fetchTrainDataRequest: () => dispatch(fetchTrainDataRequest())
});

const App = connect(
  mapStateToProps,
  bindActionsToDispatch
)(Main);

export default App;
