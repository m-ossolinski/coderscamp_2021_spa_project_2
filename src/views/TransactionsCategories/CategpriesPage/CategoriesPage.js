import React, { useState, useEffect } from "react";
import CategoriesList from "../CategoriesList/CategoriesList";
import categoriesService from "../../../services/api/categoriesService";

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      const response = await categoriesService.get();
      setCategories(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const createCategory = async (category) => {
    try {
      const newCategory = await categoriesService.create(category);
      setCategories([...categories, newCategory]);
    } catch (error) {
      console.log(error);
    }
  };

  const editCategory = async (id, updatedCategory) => {
    try {
      await categoriesService.update(id, updatedCategory);
      setCategories(
        categories.map((category) =>
          category.id !== id ? updatedCategory : category
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  const removeCategory = async (id) => {
    try {
      await categoriesService.remove(id);
      setCategories(categories.filter((category) => category.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <CategoriesList
        categories={categories}
        createCategory={createCategory}
        removeCategory={removeCategory}
        editCategory={editCategory}
      />
    </>
  );
};

export default CategoriesPage;
