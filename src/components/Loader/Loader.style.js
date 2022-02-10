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
  color: ${({ theme }) => theme.colors.fontMid};
  animation: ${rotate} 2s linear infinite;

  ${(props) =>
    props.default &&
    css`
      color: ${({ theme }) => theme.colors.fontMid};
    `}

  ${(props) =>
    props.secondary &&
    css`
      color: ${({ theme }) => theme.colors.primaryDarkest};
    `}

   ${(props) =>
    props.primary &&
    css`
      color: ${({ theme }) => theme.colors.white};
    `}
`;

export const Span = styled.span`
  margin-right: 1rem;
`;
