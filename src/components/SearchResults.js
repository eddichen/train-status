import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Loading from "./Loading";
import ResultsCard from "./ResultsCard";

const SearchResultsContainer = styled.div``;

const SearchResultsTitle = styled.h1`
  font-size: 18px;
`;

class SearchResults extends Component {
  constructor(props) {
    super(props);

    this.stationsArray = this.props.location.search.match(/[A-Z]{3}/g);

    this.stations = {
      departure: this.stationsArray[0],
      destination: this.stationsArray[1]
    };
  }

  componentDidMount() {
    this.props.fetchTrainDataRequest({
      departureStation: this.stations.departure,
      destinationStation: this.stations.destination
    });
  }

  render() {
    const error = this.props.departureData.error;
    const isFetching = this.props.departureData.isFetching;

    if (isFetching) {
      return <Loading />;
    } else if (
      Object.entries(error).length !== 0 &&
      error.constructor === Object
    ) {
      return <div>Error: {error.message}</div>;
    } else {
      return (
        <SearchResultsContainer>
          <Link to="/">Back</Link>
          <SearchResultsTitle>
            {this.props.departureData.trains.locationName} &rarr;{" "}
            {this.props.departureData.trains.filterLocationName}
          </SearchResultsTitle>

          {this.props.departureData.trains.trainServices !== undefined &&
          this.props.departureData.trains.trainServices !== null ? (
            <div>
              {this.props.departureData.trains.nrccMessages !== null
                ? this.props.departureData.trains.nrccMessages.map(
                    (message, index) => (
                      <p
                        key={index}
                        dangerouslySetInnerHTML={{ __html: message.value }}
                      />
                    )
                  )
                : null}

              {this.props.departureData.trains.trainServices.map(
                (service, index) => (
                  <ResultsCard
                    key={index}
                    service={service}
                    destination={this.stations.destination}
                  />
                )
              )}
            </div>
          ) : (
            <p>
              No trains found, please <Link to="/">try another search</Link>
            </p>
          )}
        </SearchResultsContainer>
      );
    }
  }
}

export default SearchResults;
