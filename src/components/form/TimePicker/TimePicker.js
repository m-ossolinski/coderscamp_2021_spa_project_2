import { StyledTimePicker } from "./TimePicker.styled";
import { useInputState } from "../../../services/hooks/useInputState";

export const TimePicker = () => {
  const today = new Date();
  const currentTime = today.getHours() + ":" + today.getMinutes();
  const [time, handleTime] = useInputState(currentTime);
  return (
    <StyledTimePicker>
      <label htmlFor="appt">Choose a time:</label>

      <input
        type="time"
        id="appt"
        name="appt"
        value={time}
        onChange={handleTime}
      ></input>
    </StyledTimePicker>
  );
};
