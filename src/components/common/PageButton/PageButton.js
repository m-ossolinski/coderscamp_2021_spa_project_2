import PropTypes from "prop-types";
import { StyledListLink } from "./PageButton.style";

export const PageButton = ({ direction, pageNumber, paginate }) => {
  return (
    <li onClick={() => paginate(pageNumber)}>
      <StyledListLink href="#">
        <i className={`fas fa-chevron-${direction}`}></i>
      </StyledListLink>
    </li>
  );
};

PageButton.propTypes = {
  direction: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
};
