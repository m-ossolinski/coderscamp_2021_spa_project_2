import PropTypes from "prop-types";

export const NumberOfTransactionsWidget = ({
  transactionsListSize,
  pageEntriesHandler,
}) => {
  const configurationOptions = [
    {
      id: 1,
      value: 10,
    },
    {
      id: 2,
      value: 25,
    },
    {
      id: 3,
      value: 50,
    },
    {
      id: 4,
      value: 100,
    },
  ];

  const options = configurationOptions.map(({ id, value }) => (
    <option key={id} value={value}>
      {value}
    </option>
  ));

  return (
    <>
      <label htmlFor="transactions-select">
        Select the number of transactions:
      </label>
      <select
        name="transactions"
        id="transactions-select"
        value={transactionsListSize}
        onChange={(event) =>
          pageEntriesHandler(Number.parseInt(event.target.value))
        }
      >
        {options}
      </select>
    </>
  );
};

NumberOfTransactionsWidget.propTypes = {
  transactionsListSize: PropTypes.number.isRequired,
  pageEntriesHandler: PropTypes.func.isRequired,
};
