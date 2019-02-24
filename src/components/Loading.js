import React, { Component } from "react";
import styled from "styled-components";
import loader from "../images/oval.svg";

const LoadingContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  text-align: center;

  .loading__image {
    width: 50px;
  }

  .loading__text {
    font-size: 18px;
  }
`;

class Loading extends Component {
  render() {
    return (
      <LoadingContainer>
        <img src={loader} className="loading__image" alt="loader" />
        <p className="loading__text">Loading, Please wait.</p>
      </LoadingContainer>
    );
  }
}

export default Loading;
