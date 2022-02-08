import React from "react";
import { TableItem } from "./TransactionItem.styled";
import PropTypes from "prop-types";

export const TransactionItem = ({ type, title, category, date, amount }) => {
  return (
    <>
      <TableItem>{type}</TableItem>
      <TableItem>{title}</TableItem>
      <TableItem>{category}</TableItem>
      <TableItem>{date}</TableItem>
      <TableItem>${amount}</TableItem>
    </>
  );
};

TransactionItem.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  date: PropTypes.string,
  amount: PropTypes.number,
  description: PropTypes.string,
};
