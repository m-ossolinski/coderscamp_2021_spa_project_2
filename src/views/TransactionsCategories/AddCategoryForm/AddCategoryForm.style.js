import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evently;
  align-items: left;
`;
export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormLabel = styled.label`
  color: #808080;
  font-size: 1rem;
  padding: 0.5rem 0;
  text-align: left;
`;

export const FormInput = styled.input`
  color: #808080;
  font-size: 1rem;
  border: 1px solid #808080};
  padding: 1rem;
  width: 20rem;
  height: 1.5rem;
`;

export const ColorInput = styled.input`
  width: 20rem;
  height: 2rem;
  margin: 1rem 0;
  text-align: center;
  -webkit-appearance: none;
  position: relative;
  &::-webkit-color-swatch {
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    box-sizing: border-box;
    border: 1px solid transparent;
  }
`;

export const IconWrapper = styled.button`
  width: 2rem;
  height: 2rem;
  background-color: transparent;
  font-size: 1.2rem;
`;
