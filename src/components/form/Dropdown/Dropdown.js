import { StyledDropdown } from "./Dropdown.styled";
import { useState } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";

export const Dropdown = ({
  options,
  name,
  field,
  label,
  handleChange,
  errorMessage,
  isTouched,
  handleBlur,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <StyledDropdown>
      <p>{label}</p>
      <div>
        <button
          type="button"
          onClick={() => {
            setIsVisible(!isVisible);
            handleBlur(field);
          }}
        >
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
                  handleBlur(field);
                }}
              >
                {option}
              </a>
            ))}
          </div>
        )}
      </div>
      {errorMessage && isTouched[field] === true && <p>{errorMessage}</p>}
    </StyledDropdown>
  );
};
