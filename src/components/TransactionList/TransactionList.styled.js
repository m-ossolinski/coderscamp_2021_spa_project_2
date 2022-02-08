import styled from "styled-components";

export const TransactionTable = styled.div`
  font-size: 1.6rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 350px;
  margin: 3rem 0;
`;

export const TableHeader = styled.div`
  display: flex;
  flex-direction: row;
  padding-right: 10px;
  height: 50px;
  font-weight: bold;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primaryDarkest};

  & > div {
    width: 25%;
    text-align: left;
  }
`;

export const TableContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  border: none;
`;

export const TableRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 50px;
  background: ${({ theme }) => theme.colors.primary};
  margin: 0.5rem;
  border-radius: 5px;
`;
