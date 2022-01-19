import { StyledDatePicker } from "./DatePicker.styled";
import { useInputState } from "../../../services/hooks/useInputState";

export const DatePicker = () => {
  const currentDate = new Date().toJSON().slice(0, 10);
  const [date, handleDate] = useInputState(currentDate);
  return (
    <StyledDatePicker>
      <label htmlFor="purchaseDate">Purchase date:</label>
      <input
        type="date"
        name="purchaseDate"
        min="2000-01-01"
        max={currentDate}
        value={date}
        onChange={handleDate}
      ></input>
    </StyledDatePicker>
  );
};
