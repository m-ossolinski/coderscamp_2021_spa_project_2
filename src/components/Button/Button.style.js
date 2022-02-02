import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  cursor: pointer;
  font-family: inherit;
  font-size: 1.6rem;
  border-radius: 8px;
  border: none;
  text-transform: uppercase;
  padding: 1rem 3rem;
  min-width: 30%;
  min-height: 5rem;
  background: transparent;

  ${({ type }) =>
    type === "primary" &&
    css`
      background: #3cb043;
      color: #ffffff;

      &:hover {
        background: #2d8432;
        border: 2px solid #2d8432;
      }

      &:focus {
        background: #2d8432;
        border: 2px solid #2d8432;
        box-shadow: 0 0 10px #2d8432;
        outline: none;
      }
    `}

  ${({ type }) =>
    type === "secondary" &&
    css`
      background: #ffffff;
      color: #3cb043;
      border: 2px solid #3cb043;

      &:hover {
        color: #2d8432;
        border: 2px solid #2d8432;
      }

      &:focus {
        color: #2d8432;
        border: 2px solid #2d8432;
        box-shadow: 0 0 10px #2d8432;
        outline: none;
      }
    `}
  

${({ type }) =>
    type === "default" &&
    css`
      background-color: #ffffff;
      border: 2px solid #7393b3;
      color: #7393b3;

      &:hover {
        border: 2px solid #45627f;
      }

      &:focus {
        border: 2px solid #45627f;
        box-shadow: 0 0 10px #45627f;
        outline: none;
      }
    `}
`;

export const LabelWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
