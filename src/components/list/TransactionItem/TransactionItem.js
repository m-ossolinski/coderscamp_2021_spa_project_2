import React from "react";
import { StyledListItem } from "./TransactionItem.styled";

const TransactionItem = () => {
  return (
    <StyledListItem>
      <p class="transaction-type">Deposit</p>
      <div class="transaction-info">
        <div class="transaction-info--main">
          <div class="transaction-info--titles">
            <h1 class="transaction-title">Transaction title</h1>
            <p class="transaction-category">Transaction category</p>
          </div>
          <p class="transaction-date">20.01.2022</p>
        </div>
        <p class="transaction-amount">$ 1200,00</p>
      </div>
      <p class="transaction-description">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, officiis!
      </p>
    </StyledListItem>
  );
};

export default TransactionItem;
