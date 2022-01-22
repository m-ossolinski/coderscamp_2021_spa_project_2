import { StyledDatePicker } from "./DatePicker.styled";
import { useInputState } from "../../../services/hooks/useInputState";

export const DatePicker = ({ field, handleForm }) => {
  const currentDate = new Date().toJSON().slice(0, 10);
  const [date, handleDate] = useInputState("");

  return (
    <StyledDatePicker>
      <label htmlFor="date">Purchase date:</label>
      <input
        type="date"
        name={field}
        min="2000-01-01"
        max={currentDate}
        value={date}
        onChange={(e) => {
          handleDate(e);
          handleForm(field, date);
        }}
      ></input>
    </StyledDatePicker>
  );
};
