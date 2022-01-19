import { StyledRadioInput } from "./RadioInput.styled";
import { useInputState } from "../../../services/hooks/useInputState";

export const RadioInput = ({ options, name, label }) => {
  const [value, handleValue] = useInputState(options[0]);
  return (
    <StyledRadioInput>
      <p>{label}</p>

      {options.map((o) => (
        <div key={o}>
          <input
            type="radio"
            id={o}
            name={name}
            value={o}
            onChange={handleValue}
            checked={value === o}
          />
          <label htmlFor={o}>{o}</label>
        </div>
      ))}
    </StyledRadioInput>
  );
};
