import React, { useState } from "react";
import { AddCategoryForm } from "../AddCategoryForm/AddCategoryForm";

export const AddCategory = ({ categories, createCategory }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsVisible((isVisible) => !isVisible);
  };

  return (
    <div>
      {!isVisible && (
        <button onClick={toggleFormVisibility}>Add Category</button>
      )}
      {isVisible && (
        <AddCategoryForm
          categories={categories}
          toggleFormVisibility={toggleFormVisibility}
          createCategory={createCategory}
        />
      )}
    </div>
  );
};
