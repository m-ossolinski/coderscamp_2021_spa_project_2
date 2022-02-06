import { StyledLastTransactionsList } from "./LastTransactionsList.styled";
import {
  BsFillArrowDownSquareFill,
  BsFillArrowUpRightSquareFill,
} from "react-icons/bs";

export const LastTransactionsList = ({ transactionsList }) => {
  const latestTransactions = transactionsList.slice(0, 30);
  const tableHeader = ["Title", "Category", "Date", "Amount"];
  return (
    <StyledLastTransactionsList>
      <h1>Latest transactions:</h1>
      <table>
        <thead>
          <tr>
            {tableHeader.map((th) => (
              <th key={th}>{th}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {latestTransactions.map((t) => (
            <tr key={t.id}>
              <td>{t.title}</td>
              <td>{t.category}</td>
              <td>{t.date.split("-").reverse().join(".")}</td>
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
          ))}
        </tbody>
      </table>
    </StyledLastTransactionsList>
  );
};
