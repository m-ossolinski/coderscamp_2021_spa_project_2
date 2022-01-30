import { StyledListItem, StyledListLink } from "./PageNumberButton.styled";
import PropTypes from "prop-types";

export const PageNumberButton = ({ pageNumber, paginate }) => {
  return (
    <StyledListItem onClick={() => paginate(pageNumber)}>
      <StyledListLink href="#">{pageNumber}</StyledListLink>
    </StyledListItem>
  );
};

PageNumberButton.propTypes = {
  pageNumber: PropTypes.number,
  paginate: PropTypes.func,
};
