import React from "react";
import * as Icons from "react-icons/fa";
import { RemoveCategory } from "../RemoveCategory/RemoveCategory";
import { IconWrapper, TableRow, TableTd } from "./CategoryItem.styled";
import { EditCategoryForm } from "../CategoryForm/EditCategoryForm";
import PropTypes from "prop-types";

export const CategoryItem = ({ category, removeCategory, editCategory }) => {
  const { [category.icon]: Icon } = Icons;

  return (
    <>
      <TableRow>
        <TableTd>
          <IconWrapper>
            <Icon style={{ color: `${category.color}` }} />
          </IconWrapper>
          {category.name}
        </TableTd>
        <TableTd>
          <EditCategoryForm editCategory={editCategory} category={category} />
          <RemoveCategory removeCategory={removeCategory} category={category} />
        </TableTd>
      </TableRow>
    </>
  );
};

CategoryItem.propTypes = {
  editCategory: PropTypes.func.isRequired,
  removeCategory: PropTypes.func.isRequired,
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
};
