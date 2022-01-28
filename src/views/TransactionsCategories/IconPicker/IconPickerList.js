import { IconPickerItem } from "./IconPickerItem";
import { IconWrapper } from "./IconPicker.style";

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
