import { Loader } from "../Loader/Loader";
import { LabelWrapper, StyledButton } from "../Button/Button.style";
import PropTypes from "prop-types";

export const Button = ({ type, onClick, label, isLoading, ...props }) => {
  return (
    <StyledButton type={type} onClick={onClick} {...props}>
      <LabelWrapper>
        {isLoading && <Loader type={type} />}
        {label}
      </LabelWrapper>
    </StyledButton>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  label: PropTypes.string,
  isLoading: PropTypes.bool,
};
