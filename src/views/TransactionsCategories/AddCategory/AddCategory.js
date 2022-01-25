import React, { useState } from "react";
import { AddCategoryForm } from "../AddCategoryForm/AddCategoryForm";
import Modal from "../../../components/Modal";
import { useModal } from "../../../services/hooks/useModal";

export const AddCategory = ({ createCategory }) => {
  const { isVisible, toggleVisibility } = useModal();
  const [name, setName] = useState("");
  const [icon, setIcon] = useState("");
  const [color, setColor] = useState("");

  const handleName = (name) => {
    setName(name);
  };

  const handleColor = (color) => {
    setColor(color);
  };

  const handleIcon = (icon) => {
    setIcon(icon);
  };

  const handleCreateCategory = () => {
    if (name === "" || icon === "") {
      return;
    } else {
      createCategory({
        id: Math.floor(Math.random() * 100),
        name: name,
        color: color,
        icon: icon,
      });
      toggleVisibility();
    }
  };
  return (
    <div>
      <button onClick={toggleVisibility}>Add Category</button>
      <Modal
        isVisible={isVisible}
        onCancel={toggleVisibility}
        modalHeader={"Create Category"}
        cancelBtnLabel={"Cancel creating category"}
        submitBtnLabel={"Submit changes"}
        onSubmit={handleCreateCategory}
      >
        <AddCategoryForm
          handleName={handleName}
          handleColor={handleColor}
          handleIcon={handleIcon}
          icon={icon}
        />
      </Modal>
    </div>
  );
};
