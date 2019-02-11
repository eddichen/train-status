import React, { Component } from "react";

class SearchResults extends Component {
  render() {
    return (
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
    );
  }
}

export default SearchResults;
