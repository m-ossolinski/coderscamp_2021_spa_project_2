import styled from "styled-components";

export const StyledDropdown = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 10px 0;

  & p {
    font-size: 1.5rem;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  & button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    color: black;
    height: 30px;
    width: 160px;
    padding: 5px 10px;
    border: 1px solid lightgray;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: lightgray;
    }
  }

  & > div div {
    position: absolute;
    background-color: #f1f1f1;
    border-radius: 5px;
    border: 1px solid lightgray;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  & p:last-child {
    color: red;
    font-size: 0.7rem;
  }
`;
