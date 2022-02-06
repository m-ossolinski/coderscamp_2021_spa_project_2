import styled from "styled-components";

export const Table = styled.table`
  font-size: 1.6rem;
  width: 80%;
  color: color: ${({ theme }) => theme.colors.fomtDark};
`;

export const CategoryListWrapper = styled.div`
  display: block;
  margin: 0 auto;
  text-align: center;
  width: 100%;
  height: 400px;
  overflow-y: auto;
  scroll-behavior: smooth;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const TableRow = styled.tr`
  background: ${({ theme }) => theme.colors.primaryLight};
  margin: 0.3rem;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
`;
