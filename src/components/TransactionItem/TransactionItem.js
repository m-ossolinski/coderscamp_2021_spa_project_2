import React from "react";
import { StyledListItem } from "./TransactionItem.styled";
import PropTypes from "prop-types";

import { TransactionEdit } from "../TransactionEdit/TransactionEdit";
import { TransactionDelete } from "../TransactionDelete/TransactionDelete";

export const TransactionItem = ({
  id,
  title,
  amount,
  date,
  description,
  category,
  type,
}) => {
  return (
    <StyledListItem>
      <div className="transaction-header">
        <p className="transaction-type">{type}</p>
        <p className="transaction-date">{date}</p>
      </div>
      <div className="transaction-info">
        <div className="transaction-info--titles">
          <h1 className="transaction-title">{title}</h1>
          <p className="transaction-category">{category}</p>
        </div>
        <p className="transaction-amount">$ {amount}</p>
      </div>
      <p className="transaction-description">
        {description.length > 60
          ? `${description.substring(0, 60)}...`
          : description}
      </p>

      <TransactionEdit id={id} />
      <TransactionDelete id={id} />
    </StyledListItem>
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
