import styled from "styled-components";

export const StyledRadioInput = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 0;

  & p {
    font-size: 0.7rem;
    margin: 0 0.3rem;
  }

  & div {
    display: flex;
    align-items: center;
  }

  & input {
    width: 20px;
        height: 20px;
        -webkit-appearance: inherit;
        border-radius: 50%;
        align-self: center;
        border: none;
        background: #fff;
        border: 1px solid lightgray;
        position: relative;
        &:checked:before {
            content: "";
            position: absolute;
            border-radius: 50%;
            left: 25%;
            top: 25%;
            width: 9px;
            height: 9px;
            background-color: darkgray;
        }
        &:active,
        &:hover {
            background: #e3e3e3;;
        }
    }
  }
`;
