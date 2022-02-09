import styled from "styled-components";

export const StyledOverview = styled.div`
  grid-area: overview;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const StyledElement = styled.div`
  &:not(:nth-child(1)) {
    flex-basis: 20%;
    border-radius: 10px;
    padding: 1rem;

    h5,
    p {
      text-align: center;
    }

    h5 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1.6rem;
    }
  }

  &:nth-child(1) {
    flex-basis: 100%;
    text-align: center;
    padding-bottom: 2rem;
  }

  &:nth-child(2) {
    background-color: ${({ theme }) => theme.colors.primaryLight};
  }

  &:nth-child(3) {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }

  &:nth-child(4) {
    background-color: ${({ theme }) => theme.colors.primaryDarker};
  }

  &:nth-child(5) {
    background-color: ${({ theme }) => theme.colors.primaryDarkest};
    color: ${({ theme }) => theme.colors.white};
  }
`;
