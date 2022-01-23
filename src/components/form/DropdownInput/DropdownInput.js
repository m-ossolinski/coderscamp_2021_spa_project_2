import { StyledDropdownInput } from "./DropdownInput.styled";
import { useState } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";

export const DropdownInput = ({ options, name, label, handleChange }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <StyledDropdownInput>
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
    </StyledDropdownInput>
  );
};
