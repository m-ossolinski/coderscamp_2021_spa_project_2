import styled from "styled-components";

export const IconWrapper = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.6rem;
  padding: 1rem;
  color: ${({ theme }) => theme.colors.fontDark};

  &:hover {
    color: ${({ theme }) => theme.colors.primaryDarkest};
  }
`;

export const Confirmation = styled.div`
  font-size: 1.6rem;
  padding: 1rem;
  color: #5e1916;
`;
