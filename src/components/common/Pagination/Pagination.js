import PropTypes from "prop-types";
import { PaginateButtons } from "../PaginateButtons/PaginateButtons";
import { ButtonsList } from "./Pagination.styled";

export const Pagination = ({
  transactionsListSize,
  transactionsListLength,
  currentPage,
  paginate,
}) => {
  const numberOfPages =
    transactionsListLength % transactionsListSize === 0
      ? Math.floor(transactionsListLength / transactionsListSize)
      : Math.floor(transactionsListLength / transactionsListSize) + 1;

  const arrayFromNumberOfPages = Array.from(
    { length: numberOfPages },
    (_, i) => i + 1
  );

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
  transactionsListLength: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
};
