import styled from "styled-components";

export const StyledTransactionForm = styled.div`
  width: 500px;
  height: 500px;
  background-color: lightgreen;

  & div:first-child {
    width: 100%;
  background-color: pink;
  padding: 0.5rem 1rem;

  display: flex;
  justify-content: space-between;
  }
  & span {
    align-self: center;
`;
