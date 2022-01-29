import { StyledDatePicker } from "./DatePicker.styled";
import PropTypes from "prop-types";

export const DatePicker = ({
  field,
  value,
  minDate,
  handleChange,
  errorMessage,
  isTouched,
  handleBlur,
}) => {
  const currentDate = new Date().toJSON().slice(0, 10);

  return (
    <StyledDatePicker>
      <div>
        <label htmlFor={field}>Purchase date:</label>
        <input
          type={field}
          name={field}
          min={minDate}
          max={currentDate}
          value={value}
          onChange={handleChange}
          onBlur={() => handleBlur(field)}
        ></input>
      </div>
      {errorMessage && isTouched[field] === true && <p>{errorMessage}</p>}
    </StyledDatePicker>
  );
};

DatePicker.propTypes = {
  field: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
  isTouched: PropTypes.bool.isRequired,
  handleBlur: PropTypes.func.isRequired,
};
