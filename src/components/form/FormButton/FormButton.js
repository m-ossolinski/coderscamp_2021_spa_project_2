import { StyledFormButton } from "./FormButton.styled";

export const FormButton = ({ type, handleClick, children }) => {
  return (
    <StyledFormButton type={type} onClick={handleClick}>
      {children}
    </StyledFormButton>
  );
};
