import { StyledButton } from "./Button.styled";

export const Button = ({ type, handleClick, children }) => {
  return (
    <StyledButton type={type} onClick={handleClick}>
      {children}
    </StyledButton>
  );
};
