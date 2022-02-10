import React from "react";
import { StyledHomeView } from "./HomeView.styled";
import { CategoriesPieChart } from "../../components/Charts/CategoriesPieChart";

export const HomeView = () => {
  return (
    <StyledHomeView>
      <h1>Hello & welcome</h1>
      <h3>Manage our money in style... with ease</h3>
      <div className="chart-holder">
        <CategoriesPieChart />
      </div>
    </StyledHomeView>
  );
};
