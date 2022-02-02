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
      console.log("fetch start");
      const response = await transactionsService.getTransactionList();
      setTransactionsList(response);
      console.log("fetch end");
    } catch (error) {
      throw new Error("Transaction list could not been shown.");
    } finally {
    }
  };

  const transactionCategory = { income: "income", expense: "expense" };

  const monthlySumAgregator = async (category) => {
    console.log("sum start");
    const monthlySums = [];
    if ((category = "expense")) {
      for (let i = 1; i <= 12; i++) {
        monthlySums.push(
          transactionsList
            .filter((trans) => trans.category !== "income")
            .filter((trans) => parseInt(trans.date.substring(5, 7)) === i)
            .reduce((acc, trans) => acc + parseInt(trans.amount), 0)
        );
        setExpenseChartData(monthlySums);
      }
    } else {
      for (let i = 1; i <= 12; i++) {
        monthlySums.push(
          transactionsList
            .filter((trans) => trans.category === "income")
            .filter((trans) => parseInt(trans.date.substring(5, 7)) === i)
            .reduce((acc, trans) => acc + parseInt(trans.amount), 0)
        );
        setIncomeChartData(monthlySums);
      }
    }
    console.log("sum end");
  };

  useEffect(() => {
    console.log("effect start");
    getTransactionsList();
    console.log("effect end");
  }, []);

  useEffect(() => {
    setTimeout(() => {
      monthlySumAgregator(transactionCategory.income);
      monthlySumAgregator(transactionCategory.expense);
    }, 1000);
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
