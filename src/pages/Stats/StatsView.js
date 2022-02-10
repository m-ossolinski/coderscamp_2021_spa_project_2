import React from "react";
import { useContext } from "react";
import { StyledStatsView } from "./StatsView.styled";
import { TransactionsListContext } from "../../services/context/TransactionsListContext";
import { MonthlyTransactionsChart } from "../../components/Charts/MonthlyTransactionsChart";
import { MonthlyCategoriesPieChart } from "../../components/Charts/MonthlyCategoriesPieChart";

export const StatsView = () => {
  const { transactionsList } = useContext(TransactionsListContext);
  return (
    <StyledStatsView>
      <div className="chart-holder">
        <MonthlyCategoriesPieChart />
      </div>
      <div className="chart-holder">
        <MonthlyTransactionsChart transactions={transactionsList} />
      </div>
    </StyledStatsView>
  );
};
