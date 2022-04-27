import React from 'react'
import styled from "styled-components";

const SpinnerStyle = styled.div`
  display: inline-block;
  position: relative;
  width: max-content;
  height: max-content;
  z-index: 100;

&::after {
  content: " ";
  display: block;
  border-radius: 50%;
  width: 0;
  height: 0;
  margin: 8px;
  box-sizing: border-box;
  border: max(3vw, 42px) solid #324235;
  border-color: #324235 transparent #324235 transparent;
  animation: lds-hourglass 1.2s infinite;
}
@keyframes lds-hourglass {
  0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  50% {
    transform: rotate(900deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    transform: rotate(1800deg);
  }
}
`;

const Spinner = () => {
    return (
        <SpinnerStyle></SpinnerStyle>
    )
}

export default Spinner