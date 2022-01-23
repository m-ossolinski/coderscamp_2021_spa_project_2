import { StyledRadioInput } from "./RadioInput.styled";

export const RadioInput = ({ options, field, label, value, handleChange }) => {
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
            onChange={handleChange}
            checked={o === value}
          />
          <label htmlFor={o}>{o}</label>
        </div>
      ))}
    </StyledRadioInput>
  );
};
