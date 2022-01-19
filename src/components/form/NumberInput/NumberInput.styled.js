import styled from "styled-components";

export const StyledNumberInput = styled.div`
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 90%;

  & > label {
    font-size: 0.7rem;
  }

  & > input {
    font-family: inherit;
    width: 100%;
    border: 0;
    border-bottom: 1px solid gray;
    outline: 0;
    font-size: 1.1rem;
    color: #000;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;
  }
`;
