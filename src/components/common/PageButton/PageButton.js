import { StyledListLink } from "./PageButton.style";
import PropTypes from "prop-types";

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
  direction: PropTypes.string,
  pageNumber: PropTypes.number,
  paginate: PropTypes.func,
};
