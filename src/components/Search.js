import React, { Component } from "react";
import Autocomplete from "./Autocomplete";
import SearchResults from "./SearchResults";

class Search extends Component {
  //search for trains using the trains stations selected
  searchTrains = event => {
    event.preventDefault();
    this.props.fetchTrainDataRequest({
      departureStation: this.props.departureStation,
      destinationStation: this.props.destinationStation
    });
  };

  render() {
    return (
      <div>
        <form action="" onSubmit={this.searchTrains}>
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
        </form>
        {this.props.departureData.trains.trainServices === null ? (
          <p>There are no direct services between these stations</p>
        ) : null}
        {this.props.departureData.trains.length !== 0 ? (
          <SearchResults departureData={this.props.departureData} />
        ) : null}
      </div>
    );
  }
}

export default Search;
