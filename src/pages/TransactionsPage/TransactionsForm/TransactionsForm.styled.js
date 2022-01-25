import styled from "styled-components";

export const StyledTransactionForm = styled.form`
  width: 400px;
  height: 500px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div:nth-child(6) {
    display: flex;
    gap: 1rem;
    width: 100%;
    justify-content: center;
  }
`;
