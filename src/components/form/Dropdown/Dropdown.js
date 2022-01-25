import { StyledDropdown } from "./Dropdown.styled";
import { useState } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";

export const Dropdown = ({
  options,
  name,
  field,
  label,
  handleChange,
  errors,
  isTouched,
  handleBlur,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <StyledDropdown>
      <p>{label}</p>
      <div>
        <button type="button" onClick={() => setIsVisible(!isVisible)}>
          {name} <AiOutlineArrowDown />
        </button>
        {isVisible === false ? (
          ""
        ) : (
          <div>
            {options.map((option) => (
              <a
                href="#"
                key={option}
                value={option}
                onClick={(e) => {
                  handleChange(option);
                  setIsVisible(!isVisible);
                }}
              >
                {option}
              </a>
            ))}
          </div>
        )}
      </div>
      {errors[field] && <p>{errors[field]}</p>}
    </StyledDropdown>
  );
};
