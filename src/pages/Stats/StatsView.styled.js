import styled from "styled-components";

export const StyledStatsView = styled.div`
  .chart-holder {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 900px;
    margin-bottom: 50px;
  }

  .chart-holder canvas {
    display: block;
    height: 250px;
  }
`;
