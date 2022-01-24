import React, { useState } from "react";
import * as Icons from "react-icons/fa";
import { FaTools, FaTrashAlt } from "react-icons/fa";
import { AddCategoryForm } from "../AddCategoryForm/AddCategoryForm";
import { IconWrapper, Td } from "./CategoryItem.style";

export const CategoryItem = ({ category, removeCategory, editCategory }) => {
  const [isVisible, setIsVisible] = useState(false);

  const { id, name, color, icon } = category;
  const { [icon]: Icon } = Icons;

  let toggleFormVisibility = () => {
    setIsVisible((isVisible) => !isVisible);
  };

  const handleRemoveCategory = () => {
    removeCategory(category.id);
  };

  return (
    <>
      {!isVisible && (
        <Td>
          <IconWrapper>
            <Icon style={{ color: `${color}` }} />
          </IconWrapper>
          {name}

          <IconWrapper onClick={toggleFormVisibility}>
            <FaTools />
          </IconWrapper>

          <IconWrapper onClick={handleRemoveCategory}>
            <FaTrashAlt />
          </IconWrapper>
        </Td>
      )}

      {isVisible && (
        <td>
          <AddCategoryForm
            editCategory={editCategory}
            categoryId={category.id}
            toggleFormVisibility={toggleFormVisibility}
            category={category}
          />
        </td>
      )}
    </>
  );
};
