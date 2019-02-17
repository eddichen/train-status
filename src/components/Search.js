import React, { Component } from "react";
import styled from "styled-components";
import Autocomplete from "./Autocomplete";

const SearchContainer = styled.div`
  background-color: #f1f2f6;
  padding: 0 15px;
  height: 100%;
`;

const SearchTitle = styled.h1`
  font-size: 21px;
  font-weight: normal;
  margin-top: 0;
`;

const SearchForm = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 15px;
`;

const Button = styled.button`
  color: #fff;
  font-size: 1em;
  background-color: #fa6b6b;
  border: none;
  border-radius: 4px;
  padding: 16px;
  width: 100%;
`;

class Search extends Component {
  componentDidMount() {
    this.props.fetchStationsRequest();
  }

  //search for trains using the trains stations selected
  searchTrains = event => {
    event.preventDefault();
    this.props.history.push("/search");
  };

  render() {
    return (
      <SearchContainer>
        <SearchTitle>Find your next train</SearchTitle>
        <SearchForm>
          <form action="" onSubmit={this.searchTrains}>
            <Autocomplete
              stations={this.props.stations.stationNames}
              setStation={this.props.setDepartureStation}
              inputLabel="From"
            />
            <Autocomplete
              stations={this.props.stations.stationNames}
              setStation={this.props.setDestinationStation}
              inputLabel="To"
            />
            <Button>Search Trains</Button>
          </form>
        </SearchForm>
        {/* {this.props.departureData.trains.trainServices === null ? (
          <p>There are no direct services between these stations</p>
        ) : null} */}
      </SearchContainer>
    );
  }
}

export default Search;
