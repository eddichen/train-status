import React, { Component } from "react";

class Main extends Component {
  componentDidMount() {
    this.props.fetchTrainDataRequest();
  }

  render() {
    return (
      <div>
        <p>getDepartureData</p>
      </div>
    );
  }
}

export default Main;
