import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div>
        <label>Departure:</label>
        <input type="text" name="departure" />
        <label>Destination:</label>
        <input type="text" name="destination" />
        <button>Go</button>
      </div>
    );
  }
}

export default Search;
