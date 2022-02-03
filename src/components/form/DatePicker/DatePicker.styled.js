import styled from "styled-components";

export const StyledDatePicker = styled.div`
  width: 100%;
  padding: 0.5rem 0;

  & div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  & label {
    font-size: 0.7rem;
  }

  & input {
    width: 80%;
    height: 30px;
    padding: 5px;
    border: 1px solid lightgray;
    border-radius: 5px;
  }

  & p {
    color: red;
    font-size: 0.7rem;
  }
`;
