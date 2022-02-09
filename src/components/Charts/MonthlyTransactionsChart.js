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

export const MonthlyTransactionsChart = ({ transactions = [] }) => {
  const [transactionsList, setTransactionsList] = useState(transactions);
  const [incomeChartData, setIncomeChartData] = useState([]);
  const [expenseChartData, setExpenseChartData] = useState(0);

  useEffect(() => {
    setTransactionsList(transactions);
  }, [transactions]);

  const transactionType = { income: "income", expense: "expense" };

  const monthlySumAgregator = (type, transactionsList) => {
    if (type === "expense") {
      const monthlySums = [];
      for (let i = 1; i <= 12; i++) {
        monthlySums.push(
          transactionsList
            .filter((trans) => trans.type === type)
            .filter((trans) => parseInt(trans.date.substring(5, 7)) === i)
            .reduce((acc, trans) => acc + parseInt(trans.amount), 0)
        );
      }
      setExpenseChartData(monthlySums);
    }

    if (type === "income") {
      const monthlySums = [];
      for (let i = 1; i <= 12; i++) {
        monthlySums.push(
          transactionsList
            .filter((trans) => trans.type === type)
            .filter((trans) => parseInt(trans.date.substring(5, 7)) === i)
            .reduce((acc, trans) => acc + parseInt(trans.amount), 0)
        );
      }
      setIncomeChartData(monthlySums);
    }
  };

  useEffect(() => {
    monthlySumAgregator(transactionType.income, transactionsList);
    monthlySumAgregator(transactionType.expense, transactionsList);
  }, [transactionsList]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
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

  return <Bar options={options} data={data} height="200px" />;
};
