import React from "react";
import { AppRoutes } from "./routes/AppRoutes";
import styled from "styled-components";

const AppWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const App = () => {
  return (
    <>
      <AppWrapper>
        <AppRoutes />
      </AppWrapper>
    </>
  );
};

export default App;
