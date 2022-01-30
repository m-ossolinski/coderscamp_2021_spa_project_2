import React from "react";
import { StyledListItem } from "./TransactionItem.styled";

export const TransactionItem = ({
  type,
  title,
  category,
  date,
  amount,
  description,
}) => {
  return (
    <StyledListItem>
      <p className="transaction-type">{type}</p>
      <div className="transaction-info">
        <div className="transaction-info--main">
          <div className="transaction-info--titles">
            <h1 className="transaction-title">{title}</h1>
            <p className="transaction-category">{category}</p>
          </div>
          <p className="transaction-date">{date}</p>
        </div>
        <p className="transaction-amount">$ {amount}</p>
      </div>
      <p className="transaction-description">
        {description.length > 60
          ? `${description.substring(0, 60)}...`
          : description}
      </p>
    </StyledListItem>
  );
};
