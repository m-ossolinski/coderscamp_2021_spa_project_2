import styled from "styled-components";

export const StyledTransactionForm = styled.div`
  width: 500px;
  height: 400px;
  border: 1px solid salmon;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & .TransactionForm-wrapper {
    display: flex;
    width: 80%;
  }
`;
