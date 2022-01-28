import React from "react";
import { IconPickerWrapper } from "./IconPicker.style";
import { IconPickerList } from "./IconPickerList";
import { iconList } from "../../../assets/iconList";

export const IconPicker = ({ iconInputChangeHandler }) => {
  return (
    <IconPickerWrapper>
      <IconPickerList
        iconInputChangeHandler={iconInputChangeHandler}
        iconList={iconList}
      />
    </IconPickerWrapper>
  );
};
