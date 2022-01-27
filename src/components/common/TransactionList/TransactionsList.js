import { useState, useEffect } from "react";
import { TransactionItem } from "../TransactionItem/TransactionItem";
import { requestForTransactionsList } from "../../../services/api/transactionsListService";

export const TransactionsList = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);

  const options = { actualPage: 1, entriesOnPage: 10 };
  const getTransactionsList = async () => {
    try {
      setLoading(true);
      const response = await requestForTransactionsList(options);
      setTransactions(response);
    } catch (error) {
      throw new Error("The transactions list cannot be displayed.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("use effect");
    getTransactionsList();
  }, []);

  if (loading) {
    return <p>Data is loading...</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Category</th>
          <th>Date</th>
          <th>Amount</th>
          <th>Description</th>
          <th>payment Method</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <TransactionItem
            key={transaction.id}
            category={transaction.category}
            date={transaction.date}
            paymentType={transaction.paymentType}
            description={transaction.description}
            amount={transaction.amount}
          />
        ))}
      </tbody>
    </table>
  );
};
