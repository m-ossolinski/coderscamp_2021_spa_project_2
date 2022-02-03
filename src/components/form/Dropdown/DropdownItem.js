import * as Icons from "react-icons/fa";
import { StyledDropdownItem } from "./DropdownItem.styled";

export const DropdownItem = ({
  option,
  handleChange,
  setIsVisible,
  isVisible,
  handleBlur,
  field,
}) => {
  const { [option.icon]: Icon } = Icons;
  return (
    <StyledDropdownItem
      href="#"
      value={option.name}
      onClick={(e) => {
        handleChange(option.name);
        setIsVisible(!isVisible);
        handleBlur(field);
      }}
    >
      <Icon color={option.color} className="DropdownItem-icon" /> {option.name}
    </StyledDropdownItem>
  );
};
