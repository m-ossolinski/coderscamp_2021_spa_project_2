import React, { useState } from "react";
import transactions from "../../services/api/transactions.json";
import { StyledOverview } from "./TransactionsOverview.styled";

const getTotal = (type) => {
  return transactions.filter((el) => el.type === type)
  .map((el) => el.amount)
  .reduce((sum, el) => sum + el, 0)
  .toFixed(2);
}

export const TransactionOverview = () => {
  const totalExpenses = getTotal("expense");
  const totalIncomes = getTotal("income")
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
