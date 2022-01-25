export const validate = (values) => {
  let errors = {};
  if (values.title.length === 0) {
    errors.title = "Title is required";
  }
  if (values.title.length > 0 && values.title.length < 3) {
    errors.title = "Title has to have at least 3 letters";
  }
  if (values.description.length === 0) {
    errors.description = "Description is required";
  }
  if (values.description.length > 0 && values.description.length < 8) {
    errors.description = "Title has to have at least 8 letters";
  }
  if (values.category === "select") {
    errors.category = "Please choose a category";
  }
  if (values.amount === 0) {
    errors.amount = "Amount cannot be zero";
  }
  if (values.amount < 0) {
    errors.amount = "Amount cannot be minus";
  }
  if (
    /(((0[1-9]|[12][0-9]|3[01])([/])(0[13578]|10|12)([/])(\d{4}))|(([0][1-9]|[12][0-9]|30)([/])(0[469]|11)([/])(\d{4}))|((0[1-9]|1[0-9]|2[0-8])([/])(02)([/])(\d{4}))|((29)(\/)(02)([/])([02468][048]00))|((29)([/])(02)([/])([13579][26]00))|((29)([/])(02)([/])([0-9][0-9][0][48]))|((29)([/])(02)([/])([0-9][0-9][2468][048]))|((29)([/])(02)([/])([0-9][0-9][13579][26])))/.test(
      values.date
    )
  ) {
    errors.date = "Please choose valid a date";
  }

  return errors;
};
