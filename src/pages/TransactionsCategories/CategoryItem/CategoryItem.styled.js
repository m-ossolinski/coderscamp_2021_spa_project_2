import styled from "styled-components";

export const IconWrapper = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.6rem;
  padding: 1rem;
`;

export const TableRow = styled.tr`
  background: ${({ theme }) => theme.colors.primaryLight};
  margin: 0.3rem;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
`;

export const TableTd = styled.td``;
