import PropTypes from "prop-types";

export const NumberOfTransactionsWidget = ({
  transactionsListSize,
<<<<<<< HEAD
  pageEntriesHandler,
=======
  transactionsListSizeHandler,
>>>>>>> develop
}) => {
  const configurationOptions = [
    {
      id: 1,
<<<<<<< HEAD
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
=======
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
>>>>>>> develop
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
<<<<<<< HEAD
          pageEntriesHandler(Number.parseInt(event.target.value))
=======
          transactionsListSizeHandler(Number.parseInt(event.target.value))
>>>>>>> develop
        }
      >
        {options}
      </select>
    </>
  );
};

NumberOfTransactionsWidget.propTypes = {
  transactionsListSize: PropTypes.number.isRequired,
<<<<<<< HEAD
  pageEntriesHandler: PropTypes.func.isRequired,
=======
  transactionsListSizeHandler: PropTypes.func.isRequired,
>>>>>>> develop
};
