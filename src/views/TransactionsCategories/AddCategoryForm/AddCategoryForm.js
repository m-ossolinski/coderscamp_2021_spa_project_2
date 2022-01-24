import React, { useState } from "react";
import { IconPicker } from "../IconPicker/IconPicker";
import { IconWrapper } from "../IconPicker/IconPicker.style";
import { IconPickerItem } from "../IconPicker/IconPickerItem";

import {
  Form,
  FormGroup,
  FormLabel,
  FormInput,
  FormButton,
  ColorInput,
  IconWrapper,
} from "./AddCategoryForm.style";

export const AddCategoryForm = ({
  toggleFormVisibility,
  createCategory,
  editCategory,
  categoryId,
  category,
}) => {
  const [name, setName] = useState(category ? category.name : "");
  const [icon, setIcon] = useState(category ? category.icon : "");
  const [color, setColor] = useState(category ? category.color : "");
  const [isIconPickerVisible, setIsIconPickerVisible] = useState(false);

  const nameInputChangeHandler = (event) => {
    setName(event.target.value);
  };

  const iconInputChangeHandler = (event) => {
    event.stopPropagation();
    setIcon(event.currentTarget.value);
    setIsIconPickerVisible(false);
  };

  const colorInputChangeHandler = (event) => {
    event.stopPropagation();
    setColor(event.target.value);
  };

  const toggleIconPickerVissibility = (e) => {
    setIsIconPickerVisible(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (categoryId) {
      editCategory(categoryId, {
        id: categoryId,
        name: name,
        color: color,
        icon: icon,
      });
    } else if (name === "" || icon === "") {
      return;
    } else {
      createCategory({
        id: Math.floor(Math.random() * 100),
        name: name,
        color: color,
        icon: icon,
      });
      toggleFormVisibility();
    }
  };
  return (
    <Form onSubmit={formSubmissionHandler}>
      <FormGroup>
        <FormLabel>Category Name</FormLabel>
        <FormInput type="text" value={name} onChange={nameInputChangeHandler} />
      </FormGroup>

      <FormGroup>
        <FormLabel>Select Icon</FormLabel>
        <FormButton onClick={toggleIconPickerVissibility}></FormButton>

        {isIconPickerVisible && (
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

      <FormButton type="button" onClick={toggleFormVisibility}>
        Cancel
      </FormButton>
      <FormButton type="submit">{categoryId ? "Save" : "Add"}</FormButton>
    </Form>
  );
};
