import styled from "styled-components";

export const StyledDropdown = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;

  & p {
    font-size: 0.7rem;
    width: 100%;
  }
  & button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: #fff;
    color: black;
    height: 30px;
    width: 80px;
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

    & a {
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      display: block;

      &:hover {
        background-color: gray;
      }
    }
  }
`;
