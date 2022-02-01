import transactionsService from "../../services/api/transactionsService.";
import React, { useState, useEffect } from "react";
import barChartUtils from "../../services/utils/barCharUtils.js";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const MonthlyTransactionsChart = () => {
  const [transactionsList, setTransactionsList] = useState([]);
  const [incomeChartData, setIncomeChartData] = useState([]);
  const [expenseChartData, setExpenseChartData] = useState(0);

  const getTransactionsList = async () => {
    try {
      const response = await transactionsService.getTransactionList();
      setTransactionsList(response);
    } catch (error) {
      throw new Error("Transaction list could not been shown.");
    } finally {
    }
  };

  useEffect(() => {
    getTransactionsList();
    console.log(transactionsList);

    // EXPENSE LIST from CURRENT TRANSACTIONS & SUMS by MONTH
    const expenseMonthlySums = [];

    let expenseList = transactionsList.filter(
      (trans) => trans.category !== "income"
    );

    for (let i = 1; i <= 12; i++) {
      expenseMonthlySums.push(
        expenseList
          .filter((trans) => parseInt(trans.date.substring(5, 7)) === i)
          .reduce((acc, item) => acc + parseInt(item.amount), 0)
      );
      setExpenseChartData(expenseMonthlySums);
    }

    // INCOME LIST from CURRENT TRANSACTIONS & SUMS by MONTH
    const incomeMonthlySums = [];

    let incomeList = transactionsList.filter(
      (trans) => trans.category === "income"
    );

    for (let i = 1; i <= 12; i++) {
      incomeMonthlySums.push(
        incomeList
          .filter((trans) => parseInt(trans.date.substring(5, 7)) === i)
          .reduce((acc, item) => acc + parseInt(item.amount), 0)
      );
      setIncomeChartData(incomeMonthlySums);
    }
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Monthly Expense vs Income",
      },
    },
  };

  const labels = barChartUtils.labelsYear;

  const data = {
    labels,
    datasets: [
      {
        label: "Expenses",
        data: expenseChartData,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Income",
        data: incomeChartData,
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return <Bar options={options} data={data} />;
};
