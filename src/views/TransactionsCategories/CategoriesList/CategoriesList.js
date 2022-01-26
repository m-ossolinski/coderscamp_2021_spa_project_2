import React from "react";
import { AddCategoryForm } from "../CategoryForm/AddCategoryForm";
import { CategoryItem } from "../CategoryItem/CategoryItem";
import { Table } from "./CategoryList.style";

export const CategoriesList = ({
  categories,
  createCategory,
  removeCategory,
  editCategory,
}) => {
  return (
    <>
      <AddCategoryForm createCategory={createCategory} />
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
    </>
  );
};
