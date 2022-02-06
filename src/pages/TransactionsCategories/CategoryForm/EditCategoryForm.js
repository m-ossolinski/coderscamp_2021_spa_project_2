import React, { useState, useEffect } from "react";
import { IconPicker } from "../IconPicker/IconPicker";
import { IconWrapper } from "../IconPicker/IconPicker.styled";
import { IconPickerItem } from "../IconPicker/IconPickerItem";
import Modal from "../../../components/Modal";
import { useModal } from "../../../services/hooks/useModal";
import { FaTools } from "react-icons/fa";
import { validateFormValues } from "../../../services/helpers/categoryFormValidationRules";
import PropTypes from "prop-types";
import {
  Form,
  FormGroup,
  FormLabel,
  FormInput,
  ColorInput,
  IconWrapper,
  FormError,
} from "./CategoryForm.styled";

export const EditCategoryForm = ({ editCategory, category }) => {
  const [name, setName] = useState(category.name);
  const [icon, setIcon] = useState(category.icon);
  const [color, setColor] = useState(category.color);
  const { isVisible, toggleVisibility } = useModal();
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { id: categoryId } = category;

  useEffect(() => {
    validateForm();
  }, [name, color, icon]);

  const validateForm = () => {
    const formValues = {
      name: name,
      icon: icon,
      color: color,
    };
    setFormErrors(validateFormValues(formValues));
  };

  const nameInputChangeHandler = (event) => {
    setName(event.target.value);
  };

  const iconInputChangeHandler = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIcon(event.currentTarget.value);
  };

  const colorInputChangeHandler = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setColor(event.target.value);
  };

  const handleSubmit = () => {
    setIsSubmitting(true);

    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      editCategory(categoryId, {
        id: categoryId,
        name: name,
        color: color,
        icon: icon,
      });
      toggleVisibility();
      setName(name);
      setIcon(icon);
      setColor(color);
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    toggleVisibility();
    setName(name);
    setIcon(icon);
    setColor(color);
  };

  return (
    <>
      <IconWrapper onClick={toggleVisibility}>
        <FaTools />
      </IconWrapper>
      <Modal
        isVisible={isVisible}
        onCancel={handleCancel}
        modalHeader="Edit Category"
        cancelBtnLabel="Cancel"
        submitBtnLabel="Submit"
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
            {isSubmitting && <FormError>{formErrors.name}</FormError>}
          </FormGroup>

          <FormGroup>
            <FormLabel>Select Icon</FormLabel>
            <IconPicker iconInputChangeHandler={iconInputChangeHandler} />

            {icon && (
              <IconWrapper>
                <IconPickerItem icon={icon} />
              </IconWrapper>
            )}
            {isSubmitting && <FormError>{formErrors.icon}</FormError>}
          </FormGroup>

          <FormGroup>
            <FormLabel>Select font Color</FormLabel>
            <ColorInput
              type="color"
              value={color}
              onChange={colorInputChangeHandler}
            />
            {isSubmitting && <FormError>{formErrors.color}</FormError>}
          </FormGroup>
        </Form>
      </Modal>
    </>
  );
};

EditCategoryForm.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
  editCategory: PropTypes.func.isRequired,
};
