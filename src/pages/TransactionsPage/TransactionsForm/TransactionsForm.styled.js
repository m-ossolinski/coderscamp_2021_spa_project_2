import styled from "styled-components";

export const StyledTransactionForm = styled.div`
  width: 500px;
  height: 500px;
  background-color: lightgreen;

  & > div:nth-child(1){
    width: 100%;
  padding: 0.5rem 1rem;

  display: flex;
  justify-content: space-between;
  background-color: pink;
  }

  & span {
    align-self: center;
`;
