import { Spinner, Span } from "./Loader.style";
import PropTypes from "prop-types";

export const Loader = ({ type }) => {
  return (
    <Span>
      <Spinner type={type} />
    </Span>
  );
};

Loader.propTypes = {
  type: PropTypes.string,
};
