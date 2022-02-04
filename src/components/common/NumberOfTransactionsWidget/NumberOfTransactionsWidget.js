import PropTypes from "prop-types";

export const NumberOfTransactionsWidget = ({
  transactionsListSize,
  transactionsListSizeHandler,
}) => {
  const configurationOptions = [
    {
      id: 1,
      value: 5,
    },
    {
      id: 2,
      value: 10,
    },
    {
      id: 3,
      value: 20,
    },
    {
      id: 4,
      value: 50,
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
          transactionsListSizeHandler(Number.parseInt(event.target.value))
        }
      >
        {options}
      </select>
    </>
  );
};

NumberOfTransactionsWidget.propTypes = {
  transactionsListSize: PropTypes.number.isRequired,
  transactionsListSizeHandler: PropTypes.func.isRequired,
};
