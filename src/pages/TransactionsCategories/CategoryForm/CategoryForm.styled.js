import styled from "styled-components";

export const FormWrapper = styled.div`
  font-size: 1.5rem;
  padding: 1rem;
  margin: 1rem;
  width: 100%;

  & p {
    margin-bottom: 2rem;
  }
`;

export const Form = styled.form`
  font-size: 1.5rem;
  padding: 1rem;
  margin: 1rem;
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
  padding: 0.5rem 0;
  text-align: left;
`;

export const FormInput = styled.input`
  color: #808080;
  border: 1px solid #808080};
  padding: 1rem;
  width: 80%;
  height: 4%;
`;

export const ColorInput = styled.input`
  width: 80%;
  height: 4rem;
  padding: 1rem;
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
  background-color: transparent;
  text-align: left;
  border: none;
  font-size: 1.6rem;
  padding: 1rem;
  color: ${({ theme }) => theme.colors.fontDark};

  &:hover {
    color: ${({ theme }) => theme.colors.primaryDarkest};
  }
`;

export const SelectedIcon = styled.div`
  text-align: left;
  border: none;
  font-size: 1.6rem;
  padding: 1rem;
  color: ${(props) => props.color};
`;

export const FormError = styled.span`
  color: #cd5c5c;
`;
