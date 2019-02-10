import React, { Component } from "react";
import Search from "./Search";

class Main extends Component {
  componentDidMount() {
    this.props.fetchStationsRequest();
  }

  render() {
    return (
      <div>
        <Search
          stationNames={this.props.stations.stationNames}
          setDepartureStation={this.props.setDepartureStation}
          setDestinationStation={this.props.setDestinationStation}
          departureStation={this.props.departureStation}
          destinationStation={this.props.destinationStation}
          fetchTrainDataRequest={this.props.fetchTrainDataRequest}
        />
      </div>
    );
  }
}

export default Main;
