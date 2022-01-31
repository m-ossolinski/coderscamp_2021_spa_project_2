import styled from "styled-components";

export const StyledInput = styled.div`
  width: 100%;
  & > div {
    display: flex;
    flex-direction: column;
    padding: 0.5rem 0;
    width: 100%;
  }

  & label {
    font-size: 0.7rem;
    margin-bottom: 10px;
  }

  & input {
    width: 100%;
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
