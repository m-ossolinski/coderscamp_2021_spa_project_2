import styled from "styled-components";

export const StyledStatsView = styled.div`
  display: grid;
  grid-template-columns: auto;
  padding: 10px;

  .chart-holder {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
  }

  .chart-holder canvas {
    display: block;
  }
`;
