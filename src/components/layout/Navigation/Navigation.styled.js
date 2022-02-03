import styled from "styled-components";

export const StyledNavigation = styled.nav`
  padding: 4rem 0 4rem 2rem;
  overflow: hidden;

  & ul {
    list-style: none;

    & li {
      position: relative;

      &:hover a::before {
        box-shadow: 35px 35px 0 10px white;
      }

      &:hover a::after {
        box-shadow: 35px -35px 0 10px white;
      }
    }
  }
`;
