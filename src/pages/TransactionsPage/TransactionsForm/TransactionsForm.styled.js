import styled from "styled-components";

export const StyledTransactionForm = styled.form`
  width: 400px;
  height: 500px;
  border: 1px solid salmon;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div:nth-child(3) {
    display: flex;
    gap: 1rem;
    width: 100%;
  }

  & > div:nth-child(5) {
    display: flex;
    gap: 1rem;
    width: 100%;
    justify-content: center;
  }
`;
