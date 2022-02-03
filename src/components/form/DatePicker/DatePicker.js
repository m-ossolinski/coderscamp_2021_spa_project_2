import { StyledDatePicker } from "./DatePicker.styled";
import PropTypes from "prop-types";

export const DatePicker = ({
  field,
  value,
  minDate,
  maxDate,
  handleChange,
  errorMessage,
  isTouched,
  handleBlur,
}) => {
  return (
    <StyledDatePicker>
      <div>
        <label htmlFor={field}>Purchase date:</label>
        <input
          type={field}
          name={field}
          min={minDate}
          max={maxDate}
          value={value}
          onChange={handleChange}
          onBlur={() => handleBlur(field)}
        ></input>
      </div>
      {errorMessage && isTouched === true && <p>{errorMessage}</p>}
    </StyledDatePicker>
  );
};

DatePicker.propTypes = {
  field: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  isTouched: PropTypes.bool.isRequired,
  handleBlur: PropTypes.func.isRequired,
};
