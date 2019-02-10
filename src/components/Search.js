import React, { Component } from "react";
import Autocomplete from "./Autocomplete";

class Search extends Component {
  handleClick() {
    //search for trains using the trains stations selected
    this.props.fetchTrainDataRequest({
      departureStation: this.props.departureStation,
      destinationStation: this.props.destinationStation
    });
  }

  render() {
    return (
      <div>
        <Autocomplete
          stations={this.props.stationNames}
          setStation={this.props.setDepartureStation}
          inputLabel="Departure:"
        />
        <Autocomplete
          stations={this.props.stationNames}
          setStation={this.props.setDestinationStation}
          inputLabel="Destination:"
        />
        <button
          onClick={() => {
            this.handleClick();
          }}
        >
          Go
        </button>
      </div>
    );
  }
}

export default Search;
