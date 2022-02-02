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
  const totalExpenses = getTotalAmount(TRANSACTIONS_TYPES.expense);
  const totalIncomes = getTotalAmount(TRANSACTIONS_TYPES.income);
  return (
    <StyledOverview>
      <h3>Transactions overview:</h3>
      <p>Total expenses: $ {totalExpenses}</p>
      <p>Total incomes: $ {totalIncomes}</p>
      <p>Current balance: ${(+totalIncomes + +totalExpenses).toFixed(2)}</p>
      <p>Total transactions: {transactions.length}</p>
    </StyledOverview>
  );
};
