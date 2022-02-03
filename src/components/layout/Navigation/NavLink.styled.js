import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  width: 100%;
  height: 6rem;
  padding-left: 2rem;
  border-radius: 3rem 0 0 3rem;
  text-transform: uppercase;
  font-size: 2.2rem;
  text-decoration: none;
  line-height: 5.5rem;

  & .NavLink-icon {
    margin-right: 1rem;
  }

  &.active,
  &:hover {
    background-color: #fff;
    color: #131313;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    right: 0;
    background-color: transparent;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
  }

  &::before {
    top: -5rem;
    box-shadow: 35px 35px 0 10px transparent;
  }

  &::after {
    bottom: -5rem;
    box-shadow: 35px -35px 0 10px transparent;
  }

  &.active::before {
    box-shadow: 35px 35px 0 10px #fff;
  }

  &.active::after {
    box-shadow: 35px -35px 0 10px #fff;
  }
`;
