import { StyledRadioButton } from "./RadioButton.styled";
import PropTypes from "prop-types";

export const RadioButton = ({
  options,
  field,
  label,
  buttonType,
  value,
  handleChange,
}) => {
  return (
    <StyledRadioButton>
      <p>{label}</p>

      {options != null
        ? options.map(({ id, type }) => (
            <div key={id}>
              <input
                type={buttonType}
                id={type}
                name={field}
                value={type}
                onChange={handleChange}
                checked={type === value ? true : false}
              />
              <label htmlFor={type}></label>
              <p>{type}</p>
            </div>
          ))
        : ""}
    </StyledRadioButton>
  );
};

RadioButton.propTypes = {
  options: PropTypes.array.isRequired,
  field: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  buttonType: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
