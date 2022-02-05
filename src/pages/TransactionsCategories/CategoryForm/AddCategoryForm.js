import React, { useState, useEffect } from "react";
import { IconPicker } from "../IconPicker/IconPicker";
import { IconPickerItem } from "../IconPicker/IconPickerItem";
import Modal from "../../../components/Modal";
import { useModal } from "../../../services/hooks/useModal";
import { validateFormValues } from "../../../services/helpers/categoryFormValidationRules";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import {
  Form,
  FormGroup,
  FormLabel,
  FormInput,
  ColorInput,
  IconWrapper,
  FormError,
  FormWrapper,
} from "./CategoryForm.styled";
import { Button } from "../../../components/Button/Button";

export const AddCategoryForm = ({ createCategory }) => {
  const [name, setName] = useState("");
  const [icon, setIcon] = useState("");
  const [color, setColor] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { isVisible, toggleVisibility } = useModal();

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
      createCategory({
        id: uuidv4(),
        name: name,
        color: color,
        icon: icon,
      });
      toggleVisibility();
      setName("");
      setIcon("");
      setColor("");
      setIsSubmitting(false);
    }
  };

  handleCancel = () => {
    toggleVisibility();
    setName("");
    setIcon("");
    setColor("");
    setIsSubmitting(false);
  };

  return (
    <FormWrapper>
      <Button secondary onClick={() => toggleVisibility()}>
        Add Category
      </Button>
      <Modal
        isVisible={isVisible}
        onCancel={handleCancel}
        modalHeader="Create Category"
        cancelBtnLabel="Cancel"
        submitBtnLabel="Create"
        onSubmit={handleSubmit}
      >
        <Form>
          <FormGroup>
            <FormLabel>Category Name</FormLabel>
            <FormInput
              type="text"
              value={name}
              onChange={nameInputChangeHandler}
              required
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
              required
            />
            {isSubmitting && <FormError>{formErrors.color}</FormError>}
          </FormGroup>
        </Form>
      </Modal>
    </FormWrapper>
  );
};

AddCategoryForm.propTypes = {
  createCategory: PropTypes.func.isRequired,
};
