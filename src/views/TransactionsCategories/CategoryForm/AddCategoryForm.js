import React, { useState } from "react";
import { IconPicker } from "../IconPicker/IconPicker";
import { IconWrapper } from "../IconPicker/IconPicker.style";
import { IconPickerItem } from "../IconPicker/IconPickerItem";
import Modal from "../../../components/Modal";
import { useModal } from "../../../services/hooks/useModal";

import {
  Form,
  FormGroup,
  FormLabel,
  FormInput,
  ColorInput,
  IconWrapper,
} from "./CategoryForm.style";

export const AddCategoryForm = ({ createCategory }) => {
  const [name, setName] = useState("");
  const [icon, setIcon] = useState("");
  const [color, setColor] = useState("");
  const [isIconPickerVisible, setIsIconPickerVisible] = useState(false);
  const { isVisible, toggleVisibility } = useModal();

  const nameInputChangeHandler = (event) => {
    setName(event.target.value);
  };

  const iconInputChangeHandler = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIcon(event.currentTarget.value);
    toggleIsIconPickerVissible();
  };

  const colorInputChangeHandler = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setColor(event.target.value);
  };

  const toggleIsIconPickerVissible = () => {
    setIsIconPickerVisible(!isIconPickerVisible);
  };

  const handleSubmit = () => {
    createCategory({
      id: Math.floor(Math.random() * 100),
      name: name,
      color: color,
      icon: icon,
    });
    setIcon("");
    setColor("");
    setName("");
    toggleVisibility();
  };
  return (
    <>
      <button onClick={toggleVisibility}>Add Category</button>
      <Modal
        isVisible={isVisible}
        onCancel={toggleVisibility}
        modalHeader={"Create Category"}
        cancelBtnLabel={"Cancel creating category"}
        submitBtnLabel={"Submit changes"}
        onSubmit={handleSubmit}
      >
        <Form>
          <FormGroup>
            <FormLabel>Category Name</FormLabel>
            <FormInput
              type="text"
              value={name}
              onChange={nameInputChangeHandler}
            />
          </FormGroup>

          <FormGroup>
            <FormLabel>Select Icon</FormLabel>
            <FormInput
              onClick={toggleIsIconPickerVissible}
              value={icon}
              onChange={iconInputChangeHandler}
            />

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
        </Form>
      </Modal>
    </>
  );
};
