import React, { useState, useEffect } from "react";
import { CategoriesList } from "../CategoriesList/CategoriesList";
import categoriesService from "../../../services/api/categoriesService";
import { AddCategoryForm } from "../CategoryForm/AddCategoryForm";
import { CategoryPageWrapper } from "./CategoryPage.style";

export const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    try {
      setLoading(true);
      const response = await categoriesService.getCategoriesList();
      setCategories(response);
    } catch (error) {
      throw new Error("Categories list could not been shown.");
    } finally {
      setLoading(false);
    }
  };

  const createCategory = async (category) => {
    try {
      const newCategory = await categoriesService.createCategory(category);

      setCategories([...categories, newCategory]);
    } catch (error) {
      throw new Error("Category could not be created.");
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
      throw new Error("Category could not be eddited");
    }
  };

  const removeCategory = async (id) => {
    try {
      await categoriesService.removeCategory(id);
      setCategories(categories.filter((category) => category.id !== id));
    } catch (error) {
      throw new Error("Category could not be delated.");
    }
  };

  return (
    <CategoryPageWrapper>
      {loading && <p>Category list is loading ...</p>}
      <AddCategoryForm createCategory={createCategory} />
      <CategoriesList
        categories={categories}
        createCategory={createCategory}
        removeCategory={removeCategory}
        editCategory={editCategory}
      />
    </CategoryPageWrapper>
  );
};
