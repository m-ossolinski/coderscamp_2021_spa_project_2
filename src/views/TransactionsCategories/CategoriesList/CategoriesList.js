import React from "react";
import { CategoryItem } from "../CategoryItem/CategoryItem";
import { Table } from "./CategoryList.style";
import PropTypes from "prop-types";

export const CategoriesList = ({
  categories,
  removeCategory,
  editCategory,
}) => {
  return (
    <Table>
      <tbody>
        {categories.map((category) => (
          <tr key={category.id}>
            <CategoryItem
              category={category}
              removeCategory={removeCategory}
              editCategory={editCategory}
            />
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

CategoriesList.propTypes = {
  categories: PropTypes.array.isRequired,
  editCategory: PropTypes.func.isRequired,
  removeCategory: PropTypes.func.isRequired,
};
