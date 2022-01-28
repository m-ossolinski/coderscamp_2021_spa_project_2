import React from "react";
import * as Icons from "react-icons/fa";
import { RemoveCategory } from "../RemoveCategory/RemoveCategory";
import { IconWrapper, TableRow } from "./CategoryItem.style";
import { EditCategoryForm } from "../CategoryForm/EditCategoryForm";
import PropTypes from "prop-types";

export const CategoryItem = ({ category, removeCategory, editCategory }) => {
  const { [category.icon]: Icon } = Icons;

  return (
    <>
      <TableRow>
        <IconWrapper>
          <Icon style={{ color: `${category.color}` }} />
        </IconWrapper>
        {category.name}
      </TableRow>
      <TableRow>
        <EditCategoryForm editCategory={editCategory} category={category} />
        <RemoveCategory removeCategory={removeCategory} category={category} />
      </TableRow>
    </>
  );
};

CategoryItem.propTypes = {
  category: PropTypes.object.isRequired,
  editCategory: PropTypes.func.isRequired,
  removeCategory: PropTypes.func.isRequired,

  category: PropTypes.objectOf(PropTypes.string.isRequired),
};
