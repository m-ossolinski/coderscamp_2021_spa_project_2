import { ImSpinner9 } from "react-icons/im";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled(ImSpinner9)`
  font-size: 10rem;
  color: #010057;
  animation: ${rotate} 2s linear infinite;
`;
