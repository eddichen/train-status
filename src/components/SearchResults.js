import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Loading from "./Loading";

const SearchResultsContainer = styled.div``;

const SearchResultsTitle = styled.h1`
  font-size: 18px;
`;

const ResultsCard = styled.div`
  display: flex;
  background-color: white;
  margin-bottom: 6px;
  border-top: 3px solid #a1a9c3;
`;

const ResultsCardTimes = styled.div`
  display: flex;
  flex: 1 1 40%;
`;

const Service = styled.div`
  flex: 1 1 50%;
  text-align: center;
`;

const ServiceTime = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

const ServiceDivider = styled.span`
  display: flex;
  text-align: center;
  flex: 1 1 5%;
  align-items: center;
`;

const ServiceStatus = styled.span`
  font-size: 14px;
`;

const ResultCardAdditional = styled.div`
  flex: 1 1 55%;
  text-align: right;
  font-size: 14px;
  padding-right: 10px;
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
    for (let key in stops) {
      if (stops[key].crs === destination) {
        return (
          <Service>
            <p>
              <ServiceTime>{stops[key].st}</ServiceTime>
              <br />
              <ServiceStatus>{stops[key].et}</ServiceStatus>
            </p>
          </Service>
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
                  <ResultsCard key={index}>
                    <ResultsCardTimes>
                      <Service>
                        <p>
                          <ServiceTime>{service.std}</ServiceTime>
                          <br />
                          <ServiceStatus>{service.etd}</ServiceStatus>
                        </p>
                      </Service>
                      <ServiceDivider>&rarr;</ServiceDivider>
                      {this.arrivalTime(
                        service.subsequentCallingPoints[0].callingPoint,
                        this.stations.destination
                      )}
                    </ResultsCardTimes>
                    <ResultCardAdditional>
                      <p>
                        {service.platform !== null
                          ? `Platform ${service.platform}`
                          : null}
                        <br />
                        {service.destination[0].locationName}
                      </p>
                    </ResultCardAdditional>
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
