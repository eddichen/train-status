import React, { Component } from "react";
import styled from "styled-components";

const StyledResultsCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: white;
  margin-bottom: 6px;
  padding: 5px;
  border-top: 3px solid #a1a9c3;
`;

const ResultsCardTimes = styled.div`
  display: flex;
  flex: 1 1 50%;
`;

const Service = styled.div`
  float: left;
  min-width: 65px;
`;

const ServiceTime = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

const ServiceDivider = styled.span`
  float: left;
  padding: 0 10px 0 0;
`;

const ServiceStatus = styled.span`
  font-size: 14px;
  color: ${props => {
    if (props.delayed) {
      return "red";
    }
    if (props.late) {
      return "#fa6b6b";
    } else {
      return "#132968";
    }
  }};
`;

const ResultCardAdditional = styled.div`
  flex: 1 1 50%;
  text-align: right;
  font-size: 14px;
  padding-right: 10px;
`;

const ResultCardInfoLink = styled.div`
  flex: 0 0 100%;

  button {
    padding: 0;
  }
`;

const ResultCardInfo = styled.div`
  font-size: 14px;
`;

class ResultsCard extends Component {
  constructor() {
    super();

    this.state = {
      isHidden: true
    };
  }

  arrivalTime(stops, destination) {
    for (let key in stops) {
      if (stops[key].crs === destination) {
        return (
          <Service>
            <ServiceTime>{stops[key].st}</ServiceTime>
            <br />
            {this.estimatedTime(stops[key].et)}
          </Service>
        );
      }
    }
  }

  estimatedTime(estTime) {
    switch (estTime) {
      case "On time":
        return <ServiceStatus>{estTime}</ServiceStatus>;
      case "Delayed":
      case "Cancelled":
        return <ServiceStatus delayed>{estTime}</ServiceStatus>;
      default:
        return <ServiceStatus late>{estTime}</ServiceStatus>;
    }
  }

  toggleInfo() {
    this.setState({
      isHidden: !this.state.isHidden
    });
  }

  render() {
    return (
      <StyledResultsCard>
        <ResultsCardTimes>
          <Service>
            <ServiceTime>{this.props.service.std}</ServiceTime>
            <br />
            {this.estimatedTime(this.props.service.etd)}
          </Service>
          <ServiceDivider>&rarr;</ServiceDivider>
          {this.arrivalTime(
            this.props.service.subsequentCallingPoints[0].callingPoint,
            this.props.destination
          )}
        </ResultsCardTimes>
        <ResultCardAdditional>
          {this.props.service.platform !== null
            ? `Platform ${this.props.service.platform}`
            : null}
          <br />
          {this.props.service.destination[0].locationName}
        </ResultCardAdditional>
        {this.props.service.cancelReason !== null ||
        this.props.service.delayReason !== null ? (
          <ResultCardInfoLink>
            <button type="button" onClick={this.toggleInfo.bind(this)}>
              more info
            </button>
          </ResultCardInfoLink>
        ) : null}
        {!this.state.isHidden && (
          <ResultCardInfo>
            {this.props.service.cancelReason !== null ? (
              <p>{this.props.service.cancelReason}</p>
            ) : null}
            {this.props.service.delayReason !== null ? (
              <p>{this.props.service.delayReason}</p>
            ) : null}
          </ResultCardInfo>
        )}
      </StyledResultsCard>
    );
  }
}

export default ResultsCard;
