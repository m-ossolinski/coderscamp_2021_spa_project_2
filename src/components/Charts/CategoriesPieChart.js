import transactionsService from "../../services/api/transactionsService.";
import React, { useState, useEffect } from "react";
import pieChartUtils from "../../services/utils/pieCharUtils.js";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const CategoriesPieChart = () => {
  const [transactionsList, setTransactionsList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categorySums, setCategorySums] = useState(0);

  const getCategoriesList = async (response) => {
    let transactionCategories = await response.map((item) => item.category);
    if (transactionCategories.indexOf("income") !== -1) {
      transactionCategories.splice(transactionCategories.indexOf("income"), 1);
    }
    setCategories(
      transactionCategories.filter(
        (value, index, self) => self.indexOf(value) == index
      )
    );
  };

  const getTransactionsList = async () => {
    try {
      const response = await transactionsService.getTransactionList();
      setTransactionsList(response);
      getCategoriesList(response);
    } catch (error) {
      throw new Error("Transaction list could not been shown.");
    } finally {
    }
  };

  const sumEachCategory = () => {
    let sumForEachCategory = [];
    categories.forEach((category) => {
      sumForEachCategory.push(
        transactionsList
          .filter((trans) => trans.type === "expense")
          .filter((trans) => trans.category === category)
          .reduce((acc, item) => acc + parseInt(item.amount), 0)
      );
    });

    setCategorySums(sumForEachCategory);
  };

  useEffect(() => {
    getTransactionsList();
  }, []);

  useEffect(() => {
    sumEachCategory();
  }, [transactionsList, categories]);

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Expense by Category",
      },
    },
  };

  const label = "Expense by Category";
  const labels = categories;
  const pieChartColours = pieChartUtils.pieChartColours;

  const chartData = {
    labels,
    datasets: [
      {
        label: label,
        data: categorySums,
        backgroundColor: pieChartColours,
      },
    ],
  };

  return (
    <div className="PieChart">
      <Pie
        options={chartOptions}
        data={chartData}
        width="300px"
        height="300px"
      />
    </div>
  );
};
