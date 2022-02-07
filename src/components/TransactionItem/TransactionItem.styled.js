import styled from "styled-components";

export const Td = styled.div`
  text-align: left;
  width: 25%;
  padding: 0 2rem;
`;

export const StyledListItem = styled.div`
  padding-bottom: 10px;
  border: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  width: 500px;
  max-width: 500px;
  padding: 10px;

  & > .transaction-type {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }

  & > .transaction-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
    line-height: 1.8;
  }

  & > .transaction-info .transaction-info--main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &
    > .transaction-info
    .transaction-info--main
    .transaction-info--titles
    .transaction-title {
    font-size: 15px;
  }

  &
    > .transaction-info
    .transaction-info--main
    .transaction-info--titles
    .transaction-category {
    font-style: oblique;
  }

  & > .transaction-info .transaction-info--main .transaction-date {
    font-size: 12px;
    font-weight: bold;
  }

  & > .transaction-description {
    border-top: 1px solid rgba(0, 0, 0, 0.2);
  }
`;
