import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  flex-basis: 30%;
  display: flex;
  flex-direction: column;
`;

const Navigation = () => {
  return (
    <div>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/transactions">Transactions</Link>
        <Link to="/signup">Signup</Link>
      </Nav>
    </div>
  );
};

export default Navigation;
