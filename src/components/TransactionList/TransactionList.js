import React from "react";
import transactions from "../../services/api/transactions.json";
import { TransactionItem } from "../TransactionItem/TransactionItem";

const TransactionList = () => {
  const renderList = transactions.map((transaction) => (
    <TransactionItem
      key={transaction.id}
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
