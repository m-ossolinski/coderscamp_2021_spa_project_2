import React, { useState } from "react";
import * as Icons from "react-icons/fa";
import { FaTools, FaTrashAlt } from "react-icons/fa";
import AddCategoryForm from "../AddCategoryForm/AddCategoryForm";
import { IconWrapper, Td } from "./CategoryItem.style";

const CategoryItem = ({ category, removeCategory, editCategory }) => {
  const [openForm, setOpenForm] = useState(false);

  const { id, name, color, icon } = category;
  const { [icon]: Icon } = Icons;

  const openFormHandler = () => {
    setOpenForm(true);
  };

  const handleRemoveCategory = () => {
    removeCategory(category.id);
  };

  return (
    <>
      {!openForm && (
        <Td>
          <IconWrapper>
            <Icon style={{ color: `${color}` }} />
          </IconWrapper>
          {name}

          <IconWrapper onClick={openFormHandler}>
            <FaTools />
          </IconWrapper>

          <IconWrapper onClick={handleRemoveCategory}>
            <FaTrashAlt />
          </IconWrapper>
        </Td>
      )}

      {openForm && (
        <td>
          <AddCategoryForm
            id={id}
            editCategory={editCategory}
            category={category}
          />
        </td>
      )}
    </>
  );
};

export default CategoryItem;
