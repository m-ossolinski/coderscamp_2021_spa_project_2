import React from "react";
import transactions from "./transactions.json";
import { TransactionItem } from "../TransactionItem/TransactionItem";

const TransactionList = () => {
  const renderList = transactions.map((transaction) => (
    <TransactionItem
      title={transaction.title}
      amount={transaction.amount}
      date={transaction.date}
      description={transaction.description}
      category={transaction.category}
      type={transaction.type}
    />
  ));
  return (
    <>
      <div>{renderList}</div>
    </>
  );
};

export default TransactionList;
