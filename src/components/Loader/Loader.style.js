import { ImSpinner9 } from "react-icons/im";
import styled, { keyframes, css } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled(ImSpinner9)`
  font-size: 2rem;
  color: #010057;
  animation: ${rotate} 2s linear infinite;

  ${({ type }) =>
    type === "primary" &&
    css`
      color: #ffffff;
    `}

  ${({ type }) =>
    type === "secondary" &&
    css`
      color: #3cb043;
    `}


 ${({ type }) =>
    type === "default" &&
    css`
      color: #7393b3;
    `}
`;

export const Span = styled.span`
  margin-right: 1rem;
`;
