import PropTypes from "prop-types";
import { StyledListLink } from "./PaginateButton.style.";

export const PaginateButton = ({
  pageNumber,
  currentPage,
  paginate,
  children,
}) => {
  return (
    <li onClick={() => paginate(pageNumber)}>
      <StyledListLink
        href="#"
        bg={currentPage === pageNumber ? "#fff" : "transaprent"}
        textColor={currentPage === pageNumber ? "#131313" : "#fff"}
      >
        {children ? children : pageNumber}
      </StyledListLink>
    </li>
  );
};

PaginateButton.propTypes = {
  pageNumber: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
  children: PropTypes.node,
};
