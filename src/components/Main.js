import React, { Component } from "react";
import Search from "./Search";

class Main extends Component {
  render() {
    return <Search stationNames={this.props.stationNames.stationNames} />;
  }
}

export default Main;
