import React, { useState } from "react";
import { IconPicker } from "../IconPicker/IconPicker";
import { IconWrapper } from "../IconPicker/IconPicker.style";
import { IconPickerItem } from "../IconPicker/IconPickerItem";
import Modal from "../../../components/Modal";
import { useModal } from "../../../services/hooks/useModal";
import { FaTools } from "react-icons/fa";

import {
  Form,
  FormGroup,
  FormLabel,
  FormInput,
  ColorInput,
  IconWrapper,
} from "./CategoryForm.style";

export const EditCategoryForm = ({ editCategory, category }) => {
  const [name, setName] = useState(category.name);
  const [icon, setIcon] = useState(category.icon);
  const [color, setColor] = useState(category.color);
  const [isIconPickerVisible, setIsIconPickerVisible] = useState(false);
  const { isVisible, toggleVisibility } = useModal();

  const { id: categoryId } = category;

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
    editCategory(categoryId, {
      id: categoryId,
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
      <IconWrapper onClick={toggleVisibility}>
        <FaTools />
      </IconWrapper>
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
