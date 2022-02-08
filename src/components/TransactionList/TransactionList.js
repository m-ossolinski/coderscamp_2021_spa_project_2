import { useEffect, useState } from "react";
import { TransactionItem } from "../TransactionItem/TransactionItem";
import { Pagination } from "../common/Pagination/Pagination";
import { NumberOfTransactionsWidget } from "../common/NumberOfTransactionsWidget/NumberOfTransactionsWidget";

const TransactionList = ({ transactionsList = [] }) => {
  const [transactionsPerPage, setTransactionsPerPage] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [transactionsListLength, setTransactionsListLength] = useState(0);
  const [transactionsListSize, setTransactionsListSize] = useState(5);

  useEffect(() => {
    if (transactionsList.length !== 0) {
      const sortedTransactionsList = transactionsList.sort((a, b) => {
        let dateA = new Date(a.date);
        let dateB = new Date(b.date);
        return dateB - dateA;
      });
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

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <>
      <div>{renderList}</div>
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
