// in: yyyy-mm-dd, out: dd.mm.yyyy

export const convertDate = (date) => {
  return date.split("-").reverse().join(".");
};
