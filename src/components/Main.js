import React, { Component } from "react";
import Loading from "./Loading";

class Main extends Component {
  componentDidMount() {
    this.props.fetchTrainDataRequest();
  }

  render() {
    const error = this.props.error;
    const isFetching = this.props.isFetching;

    if (isFetching) {
      return <Loading />;
    } else if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      return <div>getDepartureData</div>;
    }
  }
}

export default Main;
