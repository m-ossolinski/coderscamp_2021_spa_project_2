import { Loader } from "../Loader/Loader";
import { LabelWrapper, StyledButton } from "../Button/Button.style";
import PropTypes from "prop-types";

export const Button = ({ type, children, onClick, isLoading, ...props }) => {
  return (
    <StyledButton type={type} onClick={onClick} isLoading {...props}>
      <LabelWrapper>
        {isLoading && <Loader {...props} />}
        {children ? <div>{children}</div> : null}
      </LabelWrapper>
    </StyledButton>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  isLoading: PropTypes.bool,
};
