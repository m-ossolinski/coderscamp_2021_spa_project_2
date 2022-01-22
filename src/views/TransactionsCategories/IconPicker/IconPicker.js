import React from "react";
import IconPickerItem from "./IconPickerItem";
import { iconList } from "../../../assets/iconList";
import { IconPickerWrapper, IconWrapper } from "./IconPicker.style";

const IconPicker = ({ handleIconChange }) => {
  console.log(iconList);
  return (
    <IconPickerWrapper>
      {iconList.map((icon) => (
        <IconWrapper key={icon} onClick={handleIconChange} value={icon}>
          <IconPickerItem icon={icon} />
        </IconWrapper>
      ))}
    </IconPickerWrapper>
  );
};

export default IconPicker;
