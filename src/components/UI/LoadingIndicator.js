import React from "react";
import styled from "styled-components";

const LoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loading = styled.div`
  display: inline-block;
  position: relative;
  width: 54px;
  height: 54px;

  & div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 44px;
    height: 44px;
    margin: 6px;
    border: 6px solid #ff2058;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #ff2058 transparent transparent transparent;
  }
  & div:nth-child(1) {
    animation-delay: -0.45s;
  }
  & div:nth-child(2) {
    animation-delay: -0.3s;
  }
  & div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const LoadingIndicator = () => (
  <LoadingWrapper>
    <Loading>
      <div />
      <div />
      <div />
      <div />
    </Loading>
  </LoadingWrapper>
);

export default LoadingIndicator;