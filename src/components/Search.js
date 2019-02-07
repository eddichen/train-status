import React, { Component } from "react";
import Autocomplete from "./Autocomplete";

class Search extends Component {
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
        <button>Go</button>
      </div>
    );
  }
}

export default Search;
