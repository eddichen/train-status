import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";
import Search from "./Search";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Helvetica, Arial, sans-serif;
  }

  label,
  input {
    font-size: 1em;
    padding: 8px;
    border: 1px solid #000;
    border-radius: 3px;
  }

  .form__field {
    margin-bottom: .5rem;
  }

  .visuallyhidden { 
    position: absolute; 
    overflow: hidden; 
    clip: rect(0 0 0 0); 
    height: 1px; width: 1px; 
    margin: -1px; padding: 0; border: 0; 
  }
`;

class Main extends Component {
  componentDidMount() {
    this.props.fetchStationsRequest();
  }

  render() {
    return (
      <div>
        <GlobalStyle />
        <Search
          stationNames={this.props.stations.stationNames}
          setDepartureStation={this.props.setDepartureStation}
          setDestinationStation={this.props.setDestinationStation}
          departureStation={this.props.departureStation}
          destinationStation={this.props.destinationStation}
          fetchTrainDataRequest={this.props.fetchTrainDataRequest}
          departureData={this.props.departureData}
        />
      </div>
    );
  }
}

export default Main;
