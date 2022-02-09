import styled from "styled-components";

export const StyledHomePage = styled.div`
  display: grid;
  grid-template-rows: 2fr 9fr;
  grid-template-columns: 55% 45%;
  grid-template-areas:
    "overview overview"
    "list stats";
  gap: 2rem;
  height: 100%;

  & .PieChart {
    margin: 1rem;
  }
`;
