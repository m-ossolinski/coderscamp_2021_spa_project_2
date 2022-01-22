import { StyledTimePicker } from "./TimePicker.styled";
import { useInputState } from "../../../services/hooks/useInputState";

export const TimePicker = ({ field, handleForm }) => {
  const today = new Date();
  const currentTime = today.getHours() + ":" + today.getMinutes();
  const [time, handleTime] = useInputState("");
  return (
    <StyledTimePicker>
      <label htmlFor={field}>Choose a time:</label>

      <input
        type="time"
        id={field}
        name={field}
        value={time}
        onChange={(e) => {
          handleTime(e);
          handleForm(field, time);
        }}
      ></input>
    </StyledTimePicker>
  );
};
