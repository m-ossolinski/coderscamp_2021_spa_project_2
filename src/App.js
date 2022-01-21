import React from "react";
import MainLayout from "./components/layout/MainLayout/MainLayout";
import Navigation from "./components/layout/Navigation/Navigation";
import Header from "./components/layout/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <MainLayout>
          <Routes>
            <Route exact path="/" element={<Header />} />
            <Route exact path="/home" element={<div>Home Page</div>} />
            <Route
              exact
              path="/transactions"
              element={<div>Transactions Page</div>}
            />
            <Route exact path="/signup" element={<div>Signup Page</div>} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </>
  );
};

export default App;
