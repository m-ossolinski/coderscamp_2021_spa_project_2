import PropTypes from "prop-types";

export const NumberOfTransactionsWidget = ({
  entriesOnPage,
  pageEntriesHandler,
}) => {
  return (
    <>
      <label htmlFor="transactions-select">
        Select the number of transactions:
      </label>
      <select
        name="transactions"
        id="transactions-select"
        value={entriesOnPage}
        onChange={(event) =>
          pageEntriesHandler(Number.parseInt(event.target.value))
        }
      >
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
    </>
  );
};

NumberOfTransactionsWidget.propTypes = {
  entriesOnPage: PropTypes.number,
  paginate: PropTypes.func,
};
