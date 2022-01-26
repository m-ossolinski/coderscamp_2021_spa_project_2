import React, { useState } from "react";
import * as Icons from "react-icons/fa";
import { RemoveCategory } from "../RemoveCategory/RemoveCategory";
import { IconWrapper, Td } from "./CategoryItem.style";
import { EditCategoryForm } from "../CategoryForm/EditCategoryForm";

export const CategoryItem = ({ category, removeCategory, editCategory }) => {
  const { [category.icon]: Icon } = Icons;

  return (
    <>
      <Td>
        <IconWrapper>
          <Icon style={{ color: `${category.color}` }} />
        </IconWrapper>
        {category.name}
      </Td>
      <Td>
        <EditCategoryForm editCategory={editCategory} category={category} />
        <RemoveCategory removeCategory={removeCategory} category={category} />
      </Td>
    </>
  );
};
