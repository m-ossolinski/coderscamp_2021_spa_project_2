import { useEffect, useState } from "react";
import { TransactionItem } from "../TransactionItem/TransactionItem";
import { Pagination } from "../common/Pagination/Pagination";
import { NumberOfTransactionsWidget } from "../common/NumberOfTransactionsWidget/NumberOfTransactionsWidget";
import { sortByDate } from "../../services/helpers/sortByDate";
import {
  TransactionTable,
  TableHeader,
  TableContent,
  TableRow,
} from "./TransactionList.styled";
import { convertDate } from "../../services/helpers/convertDate";

const TransactionList = ({ transactionsList = [] }) => {
  const [transactionsPerPage, setTransactionsPerPage] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [transactionsListLength, setTransactionsListLength] = useState(0);
  const [transactionsListSize, setTransactionsListSize] = useState(5);

  useEffect(() => {
    if (transactionsList.length !== 0) {
      const sortedTransactionsList = sortByDate(transactionsList, "date");
      const begin = transactionsListSize * (currentPage - 1);
      const end = currentPage * transactionsListSize;
      const transactionsOnPage = sortedTransactionsList.slice(begin, end);
      setTransactionsPerPage(transactionsOnPage);
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [transactionsList, currentPage, transactionsListSize]);

  useEffect(() => {
    setIsLoading(true);
    setTransactionsListLength(transactionsList.length);
    setIsLoading(false);
  }, [transactionsList]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const transactionsListSizeHandler = (listSize) => {
    setTransactionsListSize(listSize);
    setCurrentPage(1);
  };

  const renderList = transactionsPerPage.map((transaction) => (
    <TableRow>
      <TransactionItem
        key={transaction.id}
        id={transaction.id}
        id={transaction.id}
        title={transaction.title}
        amount={transaction.amount}
        date={convertDate(transaction.date)}
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
      <TransactionTable>
        <TableHeader>
          <div>Type</div>
          <div>Title</div>
          <div>Category</div>
          <div>Date</div>
          <div>Amount</div>
        </TableHeader>
        <TableContent>{renderList}</TableContent>
      </TransactionTable>
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
