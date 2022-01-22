import React, { useState } from "react";
import AddCategoryForm from "../AddCategoryForm/AddCategoryForm";

const AddCategory = ({ categories, createCategory }) => {
  const [openForm, setOpenForm] = useState(false);

  const openFormHandler = () => {
    setOpenForm(true);
  };

  const closeFormHandler = () => {
    setOpenForm(false);
  };

  return (
    <div>
      {!openForm && <button onClick={openFormHandler}>Add Category</button>}
      {openForm && (
        <AddCategoryForm
          categories={categories}
          closeForm={closeFormHandler}
          createCategory={createCategory}
        />
      )}
    </div>
  );
};

export default AddCategory;
