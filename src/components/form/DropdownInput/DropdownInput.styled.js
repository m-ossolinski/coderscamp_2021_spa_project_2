import styled from "styled-components";

export const StyledDropdownInput = styled.div`
  position: relative;
  display: inline-block;
  & button {
    background-color: #fff;
    color: black;
    border: 1px solid black;
    padding: 5px;
    cursor: pointer;

    &:hover,
    &:focus {
      background-color: yellow;
    }
  }

  & > div div {
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;

    & a {
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      display: block;

      &:hover {
        background-color: pink;
      }
    }
  }
`;
