import React from "react";
import transactions from "./transactions.json";
import TransactionItem from "../TransactionItem/TransactionItem";

const TransactionList = () => {
  console.log(transactions);

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
      <p></p>
    </>
  );
};

export default TransactionList;
