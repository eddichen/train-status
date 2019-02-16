import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Search from "./Search";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body,
  #root,
  .main {
    height: 100%;
  }

  body {
    font-family: Helvetica, Arial, sans-serif;
    margin: 0;
    color: #132968;
  }

  label,
  input {
    font-size: 1em;
  }

  input {
    padding: 10px;
    border: none;
    border-radius: 4px;
    width: 100%;
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

const MainContainer = styled.div`
  background-color: #f1f2f6;
  padding: 0 15px;
  height: 100%;
`;

class Main extends Component {
  componentDidMount() {
    this.props.fetchStationsRequest();
  }

  render() {
    return (
      <div className="main">
        <GlobalStyle />
        <MainContainer>
          <Search
            stationNames={this.props.stations.stationNames}
            setDepartureStation={this.props.setDepartureStation}
            setDestinationStation={this.props.setDestinationStation}
            departureStation={this.props.departureStation}
            destinationStation={this.props.destinationStation}
            fetchTrainDataRequest={this.props.fetchTrainDataRequest}
            departureData={this.props.departureData}
          />
        </MainContainer>
      </div>
    );
  }
}

export default Main;
