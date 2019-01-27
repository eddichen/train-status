import React, { Component } from "react";
import Loading from "./Loading";

class SearchResults extends Component {
  componentDidMount() {
    this.props.fetchStationNameRequest();
  }

  render() {
    const error = this.props.departureData.error;
    const isFetching = this.props.departureData.isFetching;

    if (isFetching) {
      return <Loading />;
    } else if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      return (
        <div>
          <ul>
            {this.props.departureData.trainServices.map((service, index) => (
              <li key={index}>{service.eta}</li>
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default SearchResults;
