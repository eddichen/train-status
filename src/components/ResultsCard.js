import React, { Component } from "react";
import styled from "styled-components";

const StyledResultsCard = styled.div`
  display: flex;
  flex-wrap: wrap;
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

const ResultCardInfoLink = styled.div`
  flex: 0 0 100%;
`;

const ResultCardInfo = styled.div``;

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
            <p>
              <ServiceTime>{this.props.service.std}</ServiceTime>
              <br />
              <ServiceStatus>{this.props.service.etd}</ServiceStatus>
            </p>
          </Service>
          <ServiceDivider>&rarr;</ServiceDivider>
          {this.arrivalTime(
            this.props.service.subsequentCallingPoints[0].callingPoint,
            this.props.destination
          )}
        </ResultsCardTimes>
        <ResultCardAdditional>
          <p>
            {this.props.service.platform !== null
              ? `Platform ${this.props.service.platform}`
              : null}
            <br />
            {this.props.service.destination[0].locationName}
          </p>
        </ResultCardAdditional>
        <ResultCardInfoLink>
          <button type="button" onClick={this.toggleInfo.bind(this)}>
            more info
          </button>
        </ResultCardInfoLink>
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
