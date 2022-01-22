import React, { useState } from "react";
import IconPicker from "../IconPicker/IconPicker";
import { IconWrapper } from "../IconPicker/IconPicker.style";
import IconPickerItem from "../IconPicker/IconPickerItem";

import {
  Form,
  FormGroup,
  FormLabel,
  FormInput,
  FormButton,
  ColorInput,
  IconWrapper,
} from "./AddCategoryForm.style";

const AddCategoryForm = ({
  closeForm,
  createCategory,
  editCategory,
  category,
  id,
}) => {
  const [name, setName] = useState("");
  const [icon, setIcon] = useState("");
  const [color, setColor] = useState("");
  const [openIconPicker, setOpenIconPicker] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleIconChange = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIcon(event.currentTarget.value);
    setOpenIconPicker(false);
  };

  const handleColorChange = (event) => {
    event.stopPropagation();
    setColor(event.target.value);
  };

  const openIconPickerHandler = (e) => {
    e.preventDefault();
    setOpenIconPicker(true);
  };

  const handleCreateCategory = (event) => {
    event.preventDefault();

    createCategory({
      id: Math.floor(Math.random() * 100),
      name: name,
      color: color,
      icon: icon,
    });
  };

  const handleEditCategory = (event) => {
    event.preventDefault();

    editCategory(id, {
      id: id,
      name: name,
      color: color,
      icon: icon,
    });
  };
  return (
    <Form>
      <FormGroup>
        <FormLabel>Category Name</FormLabel>
        <FormInput type="text" value={name} onChange={handleNameChange} />
      </FormGroup>

      <FormGroup>
        <FormLabel>Select Icon</FormLabel>
        <FormButton onClick={openIconPickerHandler}></FormButton>

        {openIconPicker && <IconPicker handleIconChange={handleIconChange} />}
        {icon && (
          <IconWrapper>
            <IconPickerItem icon={icon} />
          </IconWrapper>
        )}
      </FormGroup>

      <FormGroup>
        <FormLabel>Select font Color</FormLabel>
        <ColorInput type="color" value={color} onChange={handleColorChange} />
      </FormGroup>

      <FormButton type="button" onClick={closeForm}>
        Cancel
      </FormButton>
      <FormButton onClick={id ? handleEditCategory : handleCreateCategory}>
        {id ? "Save" : "Add"}
      </FormButton>
    </Form>
  );
};

export default AddCategoryForm;
