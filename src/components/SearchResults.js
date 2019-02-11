import React, { Component } from "react";

class SearchResults extends Component {
  render() {
    return (
      <table>
        <tr>
          <td>Due</td>
          <td>Destination</td>
          <td />
          <td>Platform</td>
        </tr>

        {this.props.departureData.trains.trainServices.map((service, index) => (
          <tr key={index}>
            <td>{service.std}</td>
            <td>{service.destination[0].locationName}</td>
            <td>{service.etd}</td>
            <td>{service.platform}</td>
          </tr>
        ))}
      </table>
    );
  }
}

export default SearchResults;
