import { StyledInput } from "./Input.styled";
import PropTypes from "prop-types";

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
      {errorMessage && isTouched === true && <p>{errorMessage}</p>}
    </StyledInput>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleChange: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  isTouched: PropTypes.bool.isRequired,
  handleBlur: PropTypes.func.isRequired,
};
