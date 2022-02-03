import PropTypes from "prop-types";
import { StyledListLink } from "./PaginateButton.style.";

export const PaginateButton = ({ pageNumber, paginate, children }) => {
  return (
    <li onClick={() => paginate(pageNumber)}>
      <StyledListLink href="#">
        {children ? children : pageNumber}
      </StyledListLink>
    </li>
  );
};

PaginateButton.propTypes = {
  pageNumber: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
  children: PropTypes.node,
};
