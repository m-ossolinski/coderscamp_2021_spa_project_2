import PropTypes from "prop-types";
import { StyledMainLayout } from "./MainLayout.styled";

export const MainLayout = ({ children }) => {
  return <StyledMainLayout className="main">{children}</StyledMainLayout>;
};

MainLayout.propTypes = {
  children: PropTypes.node,
};
