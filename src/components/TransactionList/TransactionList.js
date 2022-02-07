import { useEffect, useState } from "react";
import { TransactionItem } from "../TransactionItem/TransactionItem";
import { Pagination } from "../common/Pagination/Pagination";
import { NumberOfTransactionsWidget } from "../common/NumberOfTransactionsWidget/NumberOfTransactionsWidget";
import { getTransactionsList } from "../../services/api/transactionsListService";
import { getTransactionsListLength } from "../../services/api/transactionsListService";
import {
  TransactionTabel,
  TableHeader,
  TableContent,
  TableRow,
} from "./TransactionList.styled";

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [transactionsListLength, setTransactionsListLength] = useState(0);
  const [transactionsListSize, setTransactionsListSize] = useState(5);

  const transactionListOptions = {
    currentPage,
    transactionsListSize,
  };

  useEffect(async () => {
    try {
      setIsLoading(true);
      const response = await getTransactionsList(transactionListOptions);
      setTransactions(response);
    } catch (error) {
      throw new Error(error);
    } finally {
      setIsLoading(false);
    }
  }, [currentPage, transactionsListSize]);

  useEffect(async () => {
    try {
      setIsLoading(true);
      const response = await getTransactionsListLength();
      setTransactionsListLength(response);
    } catch (error) {
      throw new Error(error);
    } finally {
      setIsLoading(false);
    }
  }, [transactionsListLength]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const transactionsListSizeHandler = (listSize) => {
    setTransactionsListSize(listSize);
    setCurrentPage(1);
  };

  const renderList = transactions.map((transaction) => (
    <TableRow>
      <TransactionItem
        key={transaction.id}
        title={transaction.title}
        amount={transaction.amount}
        date={transaction.date}
        description={transaction.description}
        category={transaction.category}
        type={transaction.type}
      />
    </TableRow>
  ));

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <>
      <TransactionTabel>
        <TableHeader>
          <div>Type</div>
          <div>Title</div>
          <div>Category</div>
          <div>Date</div>
          <div>Amount</div>
        </TableHeader>
        <TableContent>{renderList}</TableContent>
      </TransactionTabel>
      <Pagination
        transactionsListSize={transactionsListSize}
        transactionsListLength={transactionsListLength}
        currentPage={currentPage}
        paginate={paginate}
      />
      <NumberOfTransactionsWidget
        transactionsListSize={transactionsListSize}
        transactionsListSizeHandler={transactionsListSizeHandler}
      />
    </>
  );
};

export default TransactionList;
