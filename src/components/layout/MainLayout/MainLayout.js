import PropTypes from "prop-types";
import styled from "styled-components";

const Main = styled.main`
  flex-basis: 73%;
`;

export const MainLayout = ({ children }) => {
  return <Main className="main">{children}</Main>;
};

MainLayout.propTypes = {
  children: PropTypes.node,
};
