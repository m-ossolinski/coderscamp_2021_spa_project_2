import React from "react";
import { IconPickerWrapper } from "./IconPicker.styled";
import { IconPickerList } from "./IconPickerList";
import { iconList } from "../../../assets/iconList";
import PropTypes from "prop-types";

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

IconPicker.propTypes = {
  iconInputChangeHandler: PropTypes.func.isRequired,
};
