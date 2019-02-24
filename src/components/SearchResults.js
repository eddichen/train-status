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

  arrivalTime(stops, destination) {
    console.log("stops", stops);
    console.log("destination", destination);
    for (let key in stops) {
      if (stops[key].crs === destination) {
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
          <h1>
            {this.props.departureData.trains.locationName} &rarr;{" "}
            {this.props.destinationStation.stationName}
          </h1>
          {this.props.departureData.trains.trainServices !== undefined &&
          this.props.departureData.trains.trainServices !== null ? (
            <div>
              {this.props.departureData.trains.trainServices.map(
                (service, index) => (
                  <ResultsCard key={index}>
                    <ResultsCardItem>
                      <p>{service.std}</p>
                      <p>{service.etd}</p>
                    </ResultsCardItem>
                    {this.arrivalTime(
                      service.subsequentCallingPoints[0].callingPoint,
                      this.stations.destination
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
