export const sortByDate = (arr, param) => {
  return arr.sort((a, b) => {
    return new Date(b[param]) - new Date(a[param]);
  });
};
