import { IconPickerItem } from "./IconPickerItem";
import { IconWrapper } from "./IconPicker.style";
import PropTypes from "prop-types";

export const IconPickerList = ({ iconInputChangeHandler, iconList }) => {
  return (
    <>
      {iconList.map((icon) => (
        <IconWrapper key={icon} onClick={iconInputChangeHandler} value={icon}>
          <IconPickerItem icon={icon} />
        </IconWrapper>
      ))}
    </>
  );
};

IconPickerList.propTypes = {
  iconInputChangeHandler: PropTypes.func.isRequired,
  iconList: PropTypes.array.isRequired,
};
