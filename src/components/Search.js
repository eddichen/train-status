import React, { Component } from "react";
import Autocomplete from "./Autocomplete";

class Search extends Component {
  render() {
    return (
      <div>
        <Autocomplete stations={this.props.stationNames} inputLabel="From:" />
        <Autocomplete stations={this.props.stationNames} inputLabel="To:" />
        <button>Go</button>
      </div>
    );
  }
}

export default Search;
