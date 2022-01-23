import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  flex-basis: 20%;
  display: flex;
  flex-direction: column;
`;

const Navigation = () => {
  return (
    <div>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/transactions">Transactions</NavLink>
        <NavLink to="/signup">Signup</NavLink>
      </Nav>
    </div>
  );
};

export default Navigation;
