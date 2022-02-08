import React from "react";
import { StyledStatsView } from "./StatsView.styled";
import { MonthlyTransactionsChart } from "../../components/Charts/MonthlyTransactionsChart";
import { MonthlyCategoriesPieChart } from "../../components/Charts/MonthlyCategoriesPieChart";

export const StatsView = () => {
  return (
    <StyledStatsView>
      <div>
        <MonthlyTransactionsChart />
      </div>
      <div>
        <MonthlyCategoriesPieChart />
      </div>
    </StyledStatsView>
  );
};
