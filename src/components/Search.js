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

const StyledLink = styled(Link)`
  display: block;
  color: #fff;
  font-size: 1em;
  background-color: #fa6b6b;
  border: none;
  border-radius: 4px;
  padding: 16px;
  width: 100%;
  text-decoration: none;
  text-align: center;
`;

class Search extends Component {
  componentDidMount() {
    this.props.fetchStationsRequest();
    this.props.setDepartureStation({
      stationName: undefined,
      stationCode: undefined
    });
    this.props.setDestinationStation({
      stationName: undefined,
      stationCode: undefined
    });
  }

  constructUrlParams(fromStation, toStation) {
    let searchParams = "";

    if (fromStation) {
      searchParams = "?from=" + fromStation;

      if (toStation) {
        return (searchParams += "&to=" + toStation);
      }
    }
    return searchParams;
  }

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
            <form action="">
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
              <StyledLink
                to={{
                  pathname: "/trains",
                  search: this.constructUrlParams(
                    this.props.departureStation.stationCode,
                    this.props.destinationStation.stationCode
                  )
                }}
              >
                Search Trains
              </StyledLink>
            </form>
          </SearchForm>
        </SearchContainer>
      );
    }
  }
}

export default Search;
