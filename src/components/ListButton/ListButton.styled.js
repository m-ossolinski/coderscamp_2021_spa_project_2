import styled, { css } from "styled-components";

export const StyledListButton = styled.button`
  cursor: pointer;
  font-size: 1.6rem;
  border-radius: 8px;
  border: none;
  text-transform: uppercase;
  padding: 1rem 3rem;
  min-width: 60px;
  min-height: 5rem;
  background: transparent;

  ${(props) =>
    props.default &&
    css`
      background-color: ${({ theme }) => theme.colors.white};
      border: 2px solid ${({ theme }) => theme.colors.fontDark};
      color: ${({ theme }) => theme.colors.fontDark};

      &:hover {
        border: 2px solid ${({ theme }) => theme.colors.fontMid};
        color: ${({ theme }) => theme.colors.fontMid};
      }

      &:focus {
        border: 2px solid ${({ theme }) => theme.colors.fontMid};
        outline: solid 2px ${({ theme }) => theme.colors.fontMid};
        outline-offset: 5px;
      }
    `}

  ${(props) =>
    props.secondary &&
    css`
      background: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.primaryDarkest};
      border: 2px solid ${({ theme }) => theme.colors.primaryDarkest};

      &:hover {
        color: ${({ theme }) => theme.colors.primaryDarker};
        border: 2px solid ${({ theme }) => theme.colors.primaryDarker};
      }

      &:focus {
        color: ${({ theme }) => theme.colors.primaryDarker};
        outline: solid 2px ${({ theme }) => theme.colors.primaryDarker};
        outline-offset: 5px;
      }
    `}

   ${(props) =>
    props.primary &&
    css`
      background: ${({ theme }) => theme.colors.primaryDarkest};
      color: ${({ theme }) => theme.colors.white};

      &:hover {
        background: ${({ theme }) => theme.colors.primaryDarker};
        color: ${({ theme }) => theme.colors.white};
        border: 2px solid ${({ theme }) => theme.colors.primaryDarker};
      }

      &:focus {
        background: ${({ theme }) => theme.colors.primaryDarker};
        outline: solid 2px ${({ theme }) => theme.colors.primaryDarker};
        outline-offset: 5px;
      }
    `}
`;

export const LabelWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
