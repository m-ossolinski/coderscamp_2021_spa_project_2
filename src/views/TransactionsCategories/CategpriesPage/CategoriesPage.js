import React, { useState, useEffect } from "react";
import { CategoriesList } from "../CategoriesList/CategoriesList";
import categoriesService from "../../../services/api/categoriesService";

export const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      const response = await categoriesService.getCategoriesList();
      setCategories(response);
    } catch (error) {
      throw new Error("Categories list could not be shown.");
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const createCategory = async (category) => {
    try {
      const newCategory = await categoriesService.createCategory(category);

      setCategories([...categories, newCategory]);
    } catch (error) {
      throw new Error("Category could not have been created.");
    }
  };

  const editCategory = async (id, updatedCategory) => {
    try {
      await categoriesService.updateCategory(id, updatedCategory);
      setCategories(
        categories.map((category) =>
          category.id === id ? updatedCategory : category
        )
      );
    } catch (error) {
      throw new Error("Category could not have been eddited");
    }
  };

  const removeCategory = async (id) => {
    try {
      await categoriesService.removeCategory(id);
      setCategories(categories.filter((category) => category.id !== id));
    } catch (error) {
      throw new Error("Category could not have been delated.");
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
