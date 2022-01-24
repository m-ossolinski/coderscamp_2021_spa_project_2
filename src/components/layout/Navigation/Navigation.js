import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  padding: 2rem 0 2rem 1rem;
  background-color: #2f80ed;
  overflow: hidden;
`;

const StyledList = styled.ul`
  list-style: none;
`;

const StyledListElement = styled.li`
  position: relative;
  &:hover a::before {
    box-shadow: 35px 35px 0 10px white;
  }
  &:hover a::after {
    box-shadow: 35px -35px 0 10px white;
  }
`;

const StyledNavLink = styled(NavLink)`
  display: block;
  width: 100%;
  height: 3.5rem;
  padding-left: 2rem;
  border-radius: 1.75rem 0 0 1.75rem;
  color: #fcfcfc;
  text-transform: uppercase;
  font-size: 1.3rem;
  text-decoration: none;
  line-height: 3.5rem;

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
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
  }

  &::before {
    top: -3.5rem;
    box-shadow: 35px 35px 0 10px transparent;
  }

  &::after {
    bottom: -3.5rem;
    box-shadow: 35px -35px 0 10px transparent;
  }

  &.active::before {
    box-shadow: 35px 35px 0 10px #fff;
  }
  &.active::after {
    box-shadow: 35px -35px 0 10px #fff;
  }
`;

export const Navigation = () => {
  return (
    <StyledNav>
      <StyledList>
        <StyledListElement>
          <StyledNavLink to="/">Home</StyledNavLink>
        </StyledListElement>
        <StyledListElement>
          <StyledNavLink to="/transactions">Transactions</StyledNavLink>
        </StyledListElement>
        <StyledListElement>
          <StyledNavLink to="/signup">Signup</StyledNavLink>
        </StyledListElement>
      </StyledList>
    </StyledNav>
  );
};
