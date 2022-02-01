import React, { useState } from "react";
import transactions from "../../services/api/transactions.json";
import { StyledOverview } from "./TransactionsOverview.styled";

const TRANSACTIONS_TYPES = {
  expense: "expense",
  income: "income",
};

const getTotalAmount = (type) => {
  return transactions
    .filter((el) => el.type === type)
    .map((el) => el.amount)
    .reduce((sum, el) => sum + el, 0)
    .toFixed(2);
};

export const TransactionOverview = () => {
  return (
    <StyledOverview>
      <h3>Transactions overview:</h3>
      <p>Total expenses: $ {getTotalAmount(TRANSACTIONS_TYPES.expense)}</p>
      <p>Total incomes: $ {getTotalAmount(TRANSACTIONS_TYPES.income)}</p>
      <p>
        Current balance: $
        {(
          +getTotalAmount(TRANSACTIONS_TYPES.expense) +
          +getTotalAmount(TRANSACTIONS_TYPES.income)
        ).toFixed(2)}
      </p>
      <p>Total transactions: {transactions.length}</p>
    </StyledOverview>
  );
};
