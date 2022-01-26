import React from "react";
import { StyledListItem } from "./TransactionItem.styled";

export const TransactionItem = (transaction) => {
  return (
    <StyledListItem>
      <p class="transaction-type">{transaction.type}</p>
      <div class="transaction-info">
        <div class="transaction-info--main">
          <div class="transaction-info--titles">
            <h1 class="transaction-title">{transaction.title}</h1>
            <p class="transaction-category">{transaction.category}</p>
          </div>
          <p class="transaction-date">{transaction.date}</p>
        </div>
        <p class="transaction-amount">$ {transaction.amount}</p>
      </div>
      <p class="transaction-description">{transaction.description}</p>
    </StyledListItem>
  );
};
