import { StyledInput } from "./Input.styled";

export const Input = ({ type, label, field, value, handleChange }) => {
  return (
    <StyledInput>
      <label htmlFor={field}>{label}</label>
      <input
        type={type}
        id={field}
        name={field}
        value={value}
        onChange={handleChange}
      />
    </StyledInput>
  );
};
