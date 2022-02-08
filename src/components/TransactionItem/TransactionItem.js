import React from "react";
import { TableItem } from "./TransactionItem.styled";
import PropTypes from "prop-types";
import { TransactionEdit } from "../TransactionEdit/TransactionEdit";
import { TransactionDelete } from "../TransactionDelete/TransactionDelete";

export const TransactionItem = ({
  id,
  type,
  title,
  category,
  date,
  amount,
}) => {
  return (
    <>
      <TableItem>{type}</TableItem>
      <TableItem>{title}</TableItem>
      <TableItem>{category}</TableItem>
      <TableItem>{date}</TableItem>
      <TableItem>${amount}</TableItem>
      <TransactionEdit key={id} id={id} />
      <TransactionDelete key={id} id={id} />
    </>
  );
};

TransactionItem.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  date: PropTypes.string,
  amount: PropTypes.number,
  description: PropTypes.string,
};
