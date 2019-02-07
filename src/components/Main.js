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
        />
      </div>
    );
  }
}

export default Main;
