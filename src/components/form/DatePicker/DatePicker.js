import { StyledDatePicker } from "./DatePicker.styled";

export const DatePicker = ({ field, value, handleChange }) => {
  const currentDate = new Date().toJSON().slice(0, 10);

  return (
    <StyledDatePicker>
      <label htmlFor={"date"}>Purchase date:</label>
      <input
        type="date"
        name={field}
        min="2000-01-01"
        max={currentDate}
        value={value}
        onChange={handleChange}
      ></input>
    </StyledDatePicker>
  );
};
