import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Loading from "./Loading";

const SearchResultsContainer = styled.div``;

const ResultsCard = styled.div`
  display: flex;
`;

const ResultsCardItem = styled.div`
  flex: 1 1 33.333%;
`;

class SearchResults extends Component {
  componentDidMount() {
    this.props.fetchTrainDataRequest({
      departureStation: this.props.departureStation,
      destinationStation: this.props.destinationStation
    });
  }

  arrivalTime(stops, destination) {
    for (let key in stops) {
      if (stops[key].locationName === destination) {
        return (
          <ResultsCardItem>
            <p>{stops[key].st}</p>
            <p>{stops[key].et}</p>
          </ResultsCardItem>
        );
      }
    }
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
          {this.props.departureData.trains.trainServices !== undefined ? (
            <div>
              <h1>
                {this.props.departureStation.stationName} &rarr;{" "}
                {this.props.destinationStation.stationName}
              </h1>
              {this.props.departureData.trains.trainServices.map(
                (service, index) => (
                  <ResultsCard key={index}>
                    <ResultsCardItem>
                      <p>{service.std}</p>
                      <p>{service.etd}</p>
                    </ResultsCardItem>
                    {this.arrivalTime(
                      service.subsequentCallingPoints[0].callingPoint,
                      this.props.destinationStation.stationName
                    )}
                  </ResultsCard>
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
