import { StyledInput } from "./Input.styled";

export const Input = ({
  type,
  label,
  field,
  value,
  handleChange,
  errorMessage,
  isTouched,
  handleBlur,
}) => {
  return (
    <StyledInput>
      <div>
        <label htmlFor={field}>{label}</label>
        <input
          type={type}
          id={field}
          name={field}
          value={value}
          onChange={handleChange}
          onBlur={() => handleBlur(field)}
        />
      </div>
      {errorMessage && isTouched[field] === true && <p>{errorMessage}</p>}
    </StyledInput>
  );
};
