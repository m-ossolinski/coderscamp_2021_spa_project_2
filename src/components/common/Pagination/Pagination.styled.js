import styled from "styled-components";

export const ButtonsList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 1rem;
  height: 6.5rem;
  border-radius: 3.25rem;
  background-color: ${({ theme }) => theme.colors.primaryDark};
  position: relative;
`;

export const StyledItem = styled.li`
  display: inline-block;
  width: 4.5rem;
  line-height: 4.5rem;
  border-radius: 50%;
  background-color: #fff;
  margin-right: 5px;
  font-size: 1.6rem;
  text-decoration: none;
  text-align: center;
  color: #131313;
`;
