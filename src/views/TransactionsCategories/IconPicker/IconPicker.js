import React from "react";
import { IconPickerItem } from "./IconPickerItem";
import { iconList } from "../../../assets/iconList";
import { IconPickerWrapper, IconWrapper } from "./IconPicker.style";

export const IconPicker = ({ iconInputChangeHandler }) => {
  console.log(iconList);
  return (
    <IconPickerWrapper>
      {iconList.map((icon) => (
        <IconWrapper key={icon} onClick={iconInputChangeHandler} value={icon}>
          <IconPickerItem icon={icon} />
        </IconWrapper>
      ))}
    </IconPickerWrapper>
  );
};
