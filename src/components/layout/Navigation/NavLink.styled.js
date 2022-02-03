import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  width: 100%;
  height: 6rem;
  padding-left: 2rem;
  border-radius: 3rem 0 0 3rem;
  font-size: 2.2rem;
  text-decoration: none;
  line-height: 5.5rem;
  color: #c7c7c9;

  & .NavLink-icon {
    margin-right: 1.5rem;
  }

  &.active {
    color: #131313;
  }

  &:hover {
    background-color: #3ad7b2;
    color: black;
  }
`;
