import styled from "styled-components";

export const StyledLastTransactionsList = styled.div`
    grid-area: transactions;

  & h1 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  & div {
    overflow: hidden;
    overflow-y: scroll;
    height: 90%;

    & table {
  font-size: 1.5rem;
  height: 100%;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.primaryLight};
  border-collapse: collapse;

  & thead {
    & tr {
}
      & th {
        padding: 0.5rem 1rem;
        width: 150px;
        text-align: center;
        background: ${({ theme }) => theme.colors.primaryDark};
        top: 0;
    z-index: 2;
    position: sticky;
        &:first-child {
          width: 200px;
        }
      }
    }
  }

  & tbody {
    & tr {
      height: 50px;

    &:nth-child(2n) {
      background-color: ${({ theme }) => theme.colors.primary};
    }
    }
    & td {
      text-align: center;

      & span {
        margin-right: 10px;
      }

      &:nth-child(2), &:nth-child(3) {
        font-size: 1.2rem;
      }
    }
  }
}
  }
`;
