import PropTypes from "prop-types";
import { StyledListLink } from "./PaginateButton.style.";

<<<<<<< HEAD
export const PaginateButton = ({ pageNumber, paginate, children }) => {
  return (
    <li onClick={() => paginate(pageNumber)}>
      <StyledListLink href="#">
=======
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
>>>>>>> develop
        {children ? children : pageNumber}
      </StyledListLink>
    </li>
  );
};

PaginateButton.propTypes = {
  pageNumber: PropTypes.number.isRequired,
<<<<<<< HEAD
=======
  currentPage: PropTypes.number.isRequired,
>>>>>>> develop
  paginate: PropTypes.func.isRequired,
  children: PropTypes.node,
};
