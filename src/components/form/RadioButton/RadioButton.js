import { StyledRadioButton } from "./RadioButton.styled";

export const RadioButton = ({ options, field, label, value, handleChange }) => {
  return (
    <StyledRadioButton>
      <p>{label}</p>

      {options.map(({ id, type }) => (
        <div key={id}>
          <input
            type="radio"
            id={type}
            name={field}
            value={type}
            onChange={handleChange}
            checked={type === value ? true : false}
          />
          <label htmlFor={type}></label>
          <p>{type}</p>
        </div>
      ))}
    </StyledRadioButton>
  );
};
