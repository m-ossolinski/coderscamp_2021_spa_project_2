import { Loader } from "../Loader/Loader";
import { LabelWrapper, StyledListButton } from "./ListButton.styled";
import PropTypes from "prop-types";

export const ListButton = ({
  type,
  children,
  onClick,
  isLoading,
  ...props
}) => {
  return (
    <StyledListButton type={type} onClick={onClick} isLoading {...props}>
      <LabelWrapper>
        {isLoading && <Loader {...props} />}
        {children ? <div>{children}</div> : null}
      </LabelWrapper>
    </StyledListButton>
  );
};

ListButton.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  isLoading: PropTypes.bool,
};
