import styled from "styled-components";

export const StyledListItem = styled.div`
  padding-bottom: 10px;
  border: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  width: 500px;
  max-width: 500px;
  padding: 10px;
  font-size: 12px;

  & > .transaction-type {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }

  & > .transaction-header {
    display: flex;
    justify-content: space-between;
  }

  & > .transaction-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
    line-height: 1.8;
  }

  & > .transaction-info .transaction-info--titles .transaction-title {
    font-size: 13px;
  }

  &
    > .transaction-info
    .transaction-info--main
    .transaction-info--titles
    .transaction-category {
    font-style: oblique;
  }

  & > .transaction-info .transaction-info--main .transaction-date {
    font-weight: bold;
  }

  & > .transaction-description {
    border-top: 1px solid rgba(0, 0, 0, 0.2);
  }
`;
