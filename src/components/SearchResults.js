import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MainContainer = styled.div`
  background-color: #f1f2f6;
  padding: 0 15px;
  height: 100%;
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
          <div>
            <p>{stops[key].st}</p>
            <p>{stops[key].locationName}</p>
            <p>{stops[key].et}</p>
          </div>
        );
      }
    }
  }

  render() {
    return (
      <MainContainer>
        <h1>search results</h1>
        {this.props.departureData.trains.trainServices !== undefined ? (
          <div>
            {this.props.departureData.trains.trainServices.map(
              (service, index) => (
                <div key={index}>
                  <div>
                    <p>{service.std}</p>
                    <p>{service.origin[0].locationName}</p>
                    <p>{service.etd}</p>
                  </div>
                  {this.arrivalTime(
                    service.subsequentCallingPoints[0].callingPoint,
                    this.props.destinationStation.stationName
                  )}
                  <p>{service.destination[0].locationName}</p>
                </div>
              )
            )}
          </div>
        ) : (
          <p>
            No trains found, please <Link to="/">try another search</Link>
          </p>
        )}
      </MainContainer>
    );
  }
}

export default SearchResults;
