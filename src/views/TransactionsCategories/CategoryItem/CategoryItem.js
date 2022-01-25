import React, { useState } from "react";
import * as Icons from "react-icons/fa";
import { FaTools, FaTrashAlt } from "react-icons/fa";
import { AddCategoryForm } from "../AddCategoryForm/AddCategoryForm";
import { IconWrapper, Td } from "./CategoryItem.style";
import Modal from "../../../components/Modal";
import { useModal } from "../../../services/hooks/useModal";

export const CategoryItem = ({ category, removeCategory, editCategory }) => {
  const { isVisible, toggleVisibility } = useModal();
  const [name, setName] = useState(category.name);
  const [icon, setIcon] = useState(category.icon);
  const [color, setColor] = useState(category.color);

  const { id: categoryId } = category;

  const handleName = (name) => {
    setName(name);
  };

  const handleColor = (color) => {
    setColor(color);
  };

  const handleIcon = (icon) => {
    setIcon(icon);
  };

  const { [category.icon]: Icon } = Icons;

  const handleRemoveCategory = () => {
    removeCategory(categoryId);
  };

  const handleEditCategory = () => {
    if (name === "" || icon === "") {
      return;
    } else {
      editCategory(categoryId, {
        id: categoryId,
        name: name,
        color: color,
        icon: icon,
      });
    }
    toggleVisibility();
  };

  return (
    <>
      <td>
        <IconWrapper>
          <Icon style={{ color: `${color}` }} />
        </IconWrapper>
        {name}

        <IconWrapper onClick={toggleVisibility}>
          <FaTools />
        </IconWrapper>
        <Modal
          isVisible={isVisible}
          onCancel={toggleVisibility}
          modalHeader={"Edit Category"}
          cancelBtnLabel={"Cancel"}
          submitBtnLabel={"Submit changes"}
          onSubmit={handleEditCategory}
        >
          <AddCategoryForm
            category={category}
            handleName={handleName}
            handleColor={handleColor}
            handleIcon={handleIcon}
            icon={icon}
            name={name}
            color={color}
          />
        </Modal>
      </td>
      <td>
        <IconWrapper onClick={toggleVisibility}>
          <FaTrashAlt />
        </IconWrapper>
        <Modal
          isVisible={isVisible}
          onCancel={toggleVisibility}
          modalHeader={""}
          cancelBtnLabel={"Cancel"}
          submitBtnLabel={"Remove Category"}
          onSubmit={handleRemoveCategory}
        >
          <div>Are you sure to delete {category.name} category?</div>
        </Modal>
      </td>
    </>
  );
};
