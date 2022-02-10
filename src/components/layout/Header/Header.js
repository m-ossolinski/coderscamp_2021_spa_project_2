import { Navigation } from "../Navigation/Navigation";
import styled from "styled-components";

const StyledHeader = styled.header`
  flex-basis: 23%;
`;

export const Header = () => {
  return (
    <StyledHeader className="header">
      <Navigation />
    </StyledHeader>
  );
};
