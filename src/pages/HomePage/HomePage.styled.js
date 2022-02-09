import styled from "styled-components";

export const StyledHomePage = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 20% 80%;
  grid-template-areas:
    "overview overview"
    "transactions stats";
  gap: 2rem;
  height: 100%;

  & .PieChart {
    margin: 1rem;
  }
`;
