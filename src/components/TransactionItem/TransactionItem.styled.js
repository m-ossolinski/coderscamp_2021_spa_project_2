import styled from "styled-components";

export const StyledListItem = styled.div`
  padding-bottom: 10px;
  border: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  width: 500px;
  max-width: 500px;

  & > .transaction-type {
    padding: 5px 10px;
    border: 1px solid rgba(0, 0, 0, 0.2);
  }

  & > .transaction-info {
    padding: 5px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px;
  }

  & > .transaction-info .transaction-info--main {
    padding: 5px 0;
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
    margin: 10px 0;
  }

  & > .transaction-info .transaction-info--main .transaction-date {
    font-size: 12px;
    font-weight: bold;
  }

  & > .transaction-description {
    padding: 5px 10px;
  }
`;
