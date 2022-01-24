import React from "react";
import { AddCategory } from "../AddCategory/AddCategory";
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
      <AddCategory categories={categories} createCategory={createCategory} />
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
