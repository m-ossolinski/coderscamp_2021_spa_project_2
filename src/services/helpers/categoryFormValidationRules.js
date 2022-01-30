export const validateFormValues = (values) => {
  let errors = {};
  const { name, icon, color } = values;

  if (!name) {
    errors.name = "Category name is required!";
  }

  if (!icon) {
    errors.icon = "Icon is required!";
  }

  if (!color) {
    errors.color = "Color is required";
  }

  return errors;
};
