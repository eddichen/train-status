import React, { Component } from "react";
import Search from "./Search";

class Main extends Component {
  render() {
    return <Search getStationNames={this.props.getStationNames} />;
  }
}

export default Main;
