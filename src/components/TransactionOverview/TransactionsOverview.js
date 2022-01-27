import React, { useState } from "react";
import transactions from "../../services/api/transactions.json";
import { StyledOverview } from "./TransactionsOverview.styled";

export const TransactionOverview = () => {
  const totalExpenses = transactions
    .filter((el) => el.type === "expense")
    .map((el) => el.amount)
    .reduce((sum, el) => sum + el, 0)
    .toFixed(2);

  const totalIncomes = transactions
    .filter((el) => el.type === "income")
    .map((el) => el.amount)
    .reduce((sum, el) => sum + el, 0)
    .toFixed(2);

  const currentBalance = (+totalExpenses + +totalIncomes).toFixed(2);

  return (
    <StyledOverview>
      <h3>Transactions overview:</h3>
      <p>Total expenses: $ {totalExpenses}</p>
      <p>Total incomes: $ {totalIncomes}</p>
      <p>Current balance: $ {currentBalance}</p>
      <p>Total transactions: {transactions.length}</p>
    </StyledOverview>
  );
};
