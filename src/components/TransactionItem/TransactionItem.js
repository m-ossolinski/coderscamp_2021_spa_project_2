import React from "react";
import { Td } from "./TransactionItem.styled";
import PropTypes from "prop-types";

export const TransactionItem = ({
  type,
  title,
  category,
  date,
  amount,
  description,
}) => {
  return (
    <>
      <Td>{type}</Td>
      <Td>{title}</Td>
      <Td>{category}</Td>
      <Td>{date}</Td>
      <Td>${amount}</Td>
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
