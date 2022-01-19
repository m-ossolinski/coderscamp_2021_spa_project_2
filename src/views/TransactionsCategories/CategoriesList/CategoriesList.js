import React from "react";
import CategoryItem from "../CategoryItem/CategoryItem";

const CategoriesList = ({ categories }) => {
  return (
    <>
      <table>
        <tbody>
          {categories.map((category) => (
            <tr key={category.name}>
              <CategoryItem category={category} />
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default CategoriesList;
