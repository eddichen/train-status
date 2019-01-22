import { connect } from "react-redux";
import { fetchTrainDataRequest } from "../actions";
import Main from "./Main";

function mapStateToProps(state) {
  return {
    trainServices: state.getDepartureData.trainServices
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
