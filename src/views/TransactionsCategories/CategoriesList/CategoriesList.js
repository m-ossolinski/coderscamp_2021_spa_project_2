import React from "react";
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
