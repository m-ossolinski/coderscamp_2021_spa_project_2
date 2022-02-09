import PropTypes from "prop-types";
import { StyledLastTransactionsList } from "./LastTransactionsList.styled";
import {
  BsFillArrowDownSquareFill,
  BsFillArrowUpRightSquareFill,
} from "react-icons/bs";
import { convertDate } from "../../services/helpers/convertDate";
import { sortByDate } from "../../services/helpers/sortByDate";

export const LastTransactionsList = ({ transactionsList = [] }) => {
  const latestTransactions = sortByDate(transactionsList, "date");
  const tableHeader = ["Title", "Category", "Date", "Amount"];
  return (
    <StyledLastTransactionsList>
      <h1>Latest transactions:</h1>
      <div>
        <table>
          <thead>
            <tr>
              {tableHeader.map((th) => (
                <th key={th}>{th}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {latestTransactions.length !== 0 ? (
              latestTransactions.map((t) => (
                <tr key={t.id}>
                  <td>{t.title}</td>
                  <td>{t.category}</td>
                  <td>{convertDate(t.date)}</td>
                  <td>
                    {t.type === "expense" ? (
                      <p color="red">
                        <span>{t.amount}€</span>{" "}
                        <BsFillArrowDownSquareFill color="#ff5454" />
                      </p>
                    ) : (
                      <p color="green">
                        <span>{t.amount}€</span>{" "}
                        <BsFillArrowUpRightSquareFill color="#3AD7B2" />
                      </p>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td>No transactions to display</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </StyledLastTransactionsList>
  );
};

LastTransactionsList.propTypes = {
  transactionsList: PropTypes.array,
};
