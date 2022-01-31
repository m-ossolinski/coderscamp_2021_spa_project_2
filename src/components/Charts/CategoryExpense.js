import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import transactionsService from "../../services/api/transactionsService.";
import { useState, useEffect } from "react/cjs/react.development";

ChartJS.register(ArcElement, Tooltip, Legend);

export const CategoryExpense = () => {
  const [transactions, setTransactions] = useState([]);
  const [categories, setCategories] = useState([]);
  const [sums, setSums] = useState(0);
  const getTransactions = async () => {
    try {
      const response = await transactionsService.getTransactionList();
      setTransactions(response);
      const transactionCategories = response.map((item) => item.category);
      setCategories(
        transactionCategories.filter((x, i, a) => a.indexOf(x) == i)
      );
    } catch (error) {
      throw new Error("Transaction list could not been shown.");
    } finally {
    }
  };

  useEffect(() => {
    getTransactions();

    // TODO - FILTER OUT INCOME FORM CATEGORIES
    let categorySums = [];
    categories.forEach((cat) => {
      const categoryArray = transactions.filter(
        (trans) => trans.category === cat
      );
      categorySums.push(
        categoryArray.reduce((acc, item) => acc + parseInt(item.amount), 0)
      );
    });
    setSums(categorySums);
  }, []);

  const options = {
    responsive: true,
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

  const labels = categories;
  const inputData = sums;
  const pieChartColours = [
    "rgba(255, 99, 132, 0.5)",
    "rgba(53, 162, 235, 0.5)",
    "rgba(53, 50, 170, 0.5)",
    "rgba(53, 162, 100, 0.5)",
    "rgba(250, 162, 235, 0.5)",
    // TODO - NEED MORE COLOURS DEFINED
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Expense Chart",
        data: inputData,
        backgroundColor: pieChartColours,
      },
    ],
  };

  return <Pie options={options} data={data} />;
};
