import { StyledRadioInput } from "./RadioInput.styled";
import { useInputState } from "../../../services/hooks/useInputState";

export const RadioInput = ({ options, field, label, handleForm }) => {
  const [value, handleValue] = useInputState(options[0]);

  return (
    <StyledRadioInput>
      <p>{label}</p>

      {options.map((o) => (
        <div key={o}>
          <input
            type="radio"
            id={o}
            name={field}
            value={o}
            onChange={(e) => {
              handleValue(e);
              handleForm(field, value);
            }}
            checked={value === o}
          />
          <label htmlFor={o}>{o}</label>
        </div>
      ))}
    </StyledRadioInput>
  );
};
