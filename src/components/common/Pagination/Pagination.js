<<<<<<< HEAD
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { PaginateButtons } from "../PaginateButtons/PaginateButtons";
import { getTransactionsListLength } from "../../../services/api/transactionsListService";
import { ButtonsList } from "./Pagination.styled";

export const Pagination = ({ transactionsListSize, currentPage, paginate }) => {
  const [transactionsListLength, setTransactionsListLength] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

=======
import PropTypes from "prop-types";
import { PaginateButtons } from "../PaginateButtons/PaginateButtons";
import { ButtonsList } from "./Pagination.styled";

export const Pagination = ({
  transactionsListSize,
  transactionsListLength,
  currentPage,
  paginate,
}) => {
>>>>>>> develop
  const numberOfPages =
    transactionsListLength % transactionsListSize === 0
      ? Math.floor(transactionsListLength / transactionsListSize)
      : Math.floor(transactionsListLength / transactionsListSize) + 1;

  const arrayFromNumberOfPages = Array.from(
    { length: numberOfPages },
    (_, i) => i + 1
  );

<<<<<<< HEAD
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
  }, []);

  if (isLoading) {
    return <div>Loading</div>;
  }

=======
>>>>>>> develop
  return (
    <ButtonsList>
      <PaginateButtons
        currentPage={currentPage}
        numberOfPages={numberOfPages}
        arrayFromNumberOfPages={arrayFromNumberOfPages}
        paginate={paginate}
      />
    </ButtonsList>
  );
};

Pagination.propTypes = {
  transactionsListSize: PropTypes.number.isRequired,
<<<<<<< HEAD
=======
  transactionsListLength: PropTypes.number.isRequired,
>>>>>>> develop
  currentPage: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
};
