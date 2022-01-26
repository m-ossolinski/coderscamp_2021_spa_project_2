import React from "react";
import { StyledListItem } from "./TransactionItem.styled";

export const TransactionItem = (transaction) => {
  return (
    <StyledListItem>
      <p className="transaction-type">{transaction.type}</p>
      <div className="transaction-info">
        <div className="transaction-info--main">
          <div className="transaction-info--titles">
            <h1 className="transaction-title">{transaction.title}</h1>
            <p className="transaction-category">{transaction.category}</p>
          </div>
          <p className="transaction-date">{transaction.date}</p>
        </div>
        <p className="transaction-amount">$ {transaction.amount}</p>
      </div>
      <p className="transaction-description">{transaction.description}</p>
    </StyledListItem>
  );
};
