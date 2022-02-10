import transactionsService from "../../services/api/transactionsService.";
import React, { useState, useEffect } from "react";
import pieChartUtils from "../../services/utils/pieCharUtils.js";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { StyledSelect } from "./ChartsSelect.styled";
import { date } from "yup";

ChartJS.register(ArcElement, Tooltip, Legend);

export const MonthlyCategoriesPieChart = () => {
  const [transactionsList, setTransactionsList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categorySums, setCategorySums] = useState(0);
  const [selectedMonth, setSelectedMonth] = useState("01");

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

  const sumEachCategory = (monthData) => {
    let sumForEachCategory = [];
    categories.forEach((category) => {
      sumForEachCategory.push(
        transactionsList
          .filter((trans) => trans.type === "expense")
          .filter((trans) => trans.category === category)
          .filter((trans) => trans.date.substring(5, 7) === monthData)
          .reduce((acc, item) => acc + parseInt(item.amount), 0)
      );
    });
    setCategorySums(sumForEachCategory);
  };

  const updateMonthChart = (event) => {
    setSelectedMonth(event.target.value);
    sumEachCategory(selectedMonth);
  };

  useEffect(() => {
    getTransactionsList();
  }, []);

  useEffect(() => {
    sumEachCategory(selectedMonth);
  }, [transactionsList, categories, selectedMonth]);

  const chartOptions = {
    responsive: false,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: true,
        text: "Expense by Month",
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
    <>
      <StyledSelect>
        <label for="standard-select">Select month:</label>
        <div class="select">
          <select
            id="standard-select"
            value={selectedMonth}
            onChange={updateMonthChart}
          >
            <option value="01">January</option>
            <option value="02">February</option>
            <option value="03">March</option>
            <option value="04">April</option>
            <option value="05">May</option>
            <option value="06">Jun</option>
            <option value="07">July</option>
            <option value="08">August</option>
            <option value="09">Septemeber</option>
            <option value="10">Ocotober</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
          <span class="focus"></span>
        </div>
      </StyledSelect>

      <div>
        <Pie
          options={chartOptions}
          data={chartData}
          width="700px"
          height="225px"
        />
      </div>
    </>
  );
};
