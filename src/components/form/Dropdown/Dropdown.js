import { StyledDropdown } from "./Dropdown.styled";
import { DropdownItem } from "./DropdownItem";
import { useState } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import PropTypes from "prop-types";

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
              <DropdownItem
                key={option.id}
                option={option}
                handleChange={handleChange}
                setIsVisible={setIsVisible}
                isVisible={isVisible}
                handleBlur={handleBlur}
                field={field}
              />
            ))}
          </div>
        )}
      </div>
      {errorMessage && isTouched === true && <p>{errorMessage}</p>}
    </StyledDropdown>
  );
};

Dropdown.propTypes = {
  options: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  isTouched: PropTypes.bool.isRequired,
  handleBlur: PropTypes.func.isRequired,
};
