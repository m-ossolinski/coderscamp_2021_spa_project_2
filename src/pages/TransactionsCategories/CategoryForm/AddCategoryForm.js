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
  SelectedIcon,
} from "./CategoryForm.styled";
import { Button } from "../../../components/Button/Button";
import { Typography } from "../../../components/common/Typography/Typography";

export const AddCategoryForm = ({ createCategory, loading }) => {
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

  const handleCancel = () => {
    toggleVisibility();
    setName("");
    setIcon("");
    setColor("");
    setIsSubmitting(false);
  };

  return (
    <FormWrapper>
      <Typography tag="h3" size="large" weight="900" color="#0d9976">
        <p>Manage your categories</p>
      </Typography>
      <Button secondary loading onClick={() => toggleVisibility()}>
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
              <SelectedIcon color={color}>
                <IconPickerItem icon={icon} />
              </SelectedIcon>
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
