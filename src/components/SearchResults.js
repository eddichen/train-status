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

  render() {
    return (
      <MainContainer>
        <h1>search results</h1>
        {this.props.departureData.trains.trainServices !== undefined ? (
          <table>
            <thead>
              <tr>
                <td>Due</td>
                <td>Destination</td>
                <td />
                <td>Platform</td>
              </tr>
            </thead>
            <tbody>
              {this.props.departureData.trains.trainServices.map(
                (service, index) => (
                  <tr key={index}>
                    <td>{service.std}</td>
                    <td>{service.destination[0].locationName}</td>
                    <td>{service.etd}</td>
                    <td>{service.platform}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
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
