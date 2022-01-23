import styled from "styled-components";

export const StyledDatePicker = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.5rem 0;

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
`;
