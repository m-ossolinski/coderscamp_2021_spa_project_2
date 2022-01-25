import React, { useState } from "react";
import { IconPicker } from "../IconPicker/IconPicker";
import { IconWrapper } from "../IconPicker/IconPicker.style";
import { IconPickerItem } from "../IconPicker/IconPickerItem";

import {
  Form,
  FormGroup,
  FormLabel,
  FormInput,
  ColorInput,
  IconWrapper,
} from "./AddCategoryForm.style";

export const AddCategoryForm = ({
  handleName,
  handleIcon,
  handleColor,
  icon,
  color,
  name,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const nameInputChangeHandler = (event) => {
    handleName(event.target.value);
  };

  const iconInputChangeHandler = (event) => {
    event.preventDefault();
    event.stopPropagation();
    handleIcon(event.currentTarget.value);
    toggleVisibility();
  };

  const colorInputChangeHandler = (event) => {
    event.preventDefault();
    event.stopPropagation();
    handleColor(event.target.value);
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Form>
      <FormGroup>
        <FormLabel>Category Name</FormLabel>
        <FormInput type="text" value={name} onChange={nameInputChangeHandler} />
      </FormGroup>

      <FormGroup>
        <FormLabel>Select Icon</FormLabel>
        <FormInput
          onClick={toggleVisibility}
          value={icon}
          onChange={iconInputChangeHandler}
        />

        {isVisible && (
          <IconPicker iconInputChangeHandler={iconInputChangeHandler} />
        )}
        {icon && (
          <IconWrapper>
            <IconPickerItem icon={icon} />
          </IconWrapper>
        )}
      </FormGroup>

      <FormGroup>
        <FormLabel>Select font Color</FormLabel>
        <ColorInput
          type="color"
          value={color}
          onChange={colorInputChangeHandler}
        />
      </FormGroup>
    </Form>
  );
};
