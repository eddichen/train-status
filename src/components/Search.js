import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Autocomplete from "./Autocomplete";
import Loading from "./Loading";

const SearchContainer = styled.div`
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

    const fromStation = this.props.departureStation.stationCode;
    const toStation = this.props.destinationStation.stationCode;

    this.props.history.push(`/search/${fromStation}/to/${toStation}`);
  };

  render() {
    const error = this.props.stations.error;
    const isFetching = this.props.stations.isFetching;

    if (isFetching) {
      return <Loading />;
    } else if (
      Object.entries(error).length !== 0 &&
      error.constructor === Object
    ) {
      return <div>Error: {error.message}</div>;
    } else {
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
              <Link
                to={{
                  pathname: "/trains",
                  search:
                    "?from=" +
                    this.props.departureStation.stationCode +
                    "&to=" +
                    this.props.destinationStation.stationCode
                }}
              >
                Search Trains
              </Link>
            </form>
          </SearchForm>
          {/* {this.props.departureData.trains.trainServices === null ? (
            <p>There are no direct services between these stations</p>
          ) : null} */}
        </SearchContainer>
      );
    }
  }
}

export default Search;
