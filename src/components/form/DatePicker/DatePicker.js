import { StyledDatePicker } from "./DatePicker.styled";

export const DatePicker = ({
  field,
  value,
  handleChange,
  errors,
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
          min="2000-01-01"
          max={currentDate}
          value={value}
          onChange={handleChange}
          onBlur={() => handleBlur(field)}
        ></input>
      </div>
      {errors[field] && isTouched[field] && <p>{errors[field]}</p>}
    </StyledDatePicker>
  );
};
