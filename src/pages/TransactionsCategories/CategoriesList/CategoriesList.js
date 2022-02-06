import React from "react";
import { CategoryItem } from "../CategoryItem/CategoryItem";
import { Table, CategoryListWrapper, TableRow } from "./CategoryList.styled";
import PropTypes from "prop-types";

export const CategoriesList = ({
  categories,
  removeCategory,
  editCategory,
}) => {
  return (
    <CategoryListWrapper>
      <Table>
        <tbody>
          {categories.map((category) => (
            <TableRow key={category.id}>
              <CategoryItem
                category={category}
                removeCategory={removeCategory}
                editCategory={editCategory}
              />
            </TableRow>
          ))}
        </tbody>
      </Table>
    </CategoryListWrapper>
  );
};

CategoriesList.propTypes = {
  categories: PropTypes.array.isRequired,
  editCategory: PropTypes.func.isRequired,
  removeCategory: PropTypes.func.isRequired,
};
