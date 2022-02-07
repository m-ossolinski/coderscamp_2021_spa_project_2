import PropTypes from "prop-types";
import { StyledTypography } from "./Typography.styled";

const fontSizeMapping = {
  tiny: "1.2rem",
  extraSmall: "1.4rem",
  small: "1.6rem",
  medium: "2rem",
  big: "2.5rem",
  large: "3rem",
  extraLarge: "4.8rem",
};

export const Typography = ({
  tag,
  size,
  weight,
  color,
  transform,
  className,
  children,
}) => {
  return (
    <StyledTypography
      as={tag}
      size={fontSizeMapping[size]}
      weight={weight}
      color={color}
      transform={transform}
      className={className}
    >
      {children}
    </StyledTypography>
  );
};

Typography.defaultProps = {
  tag: "p",
  weight: "400",
  color: "#030303",
  transform: "none",
};

Typography.propTypes = {
  tag: PropTypes.string,
  weight: PropTypes.string,
  color: PropTypes.string,
  transform: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  size: (props, propName, componentName) => {
    const fontSizeMappingKeys = Object.keys(fontSizeMapping);
    const isThePropSizeCorret = fontSizeMappingKeys.some(
      (key) => key === props[propName]
    );

    if (!isThePropSizeCorret) {
      return new Error(
        `Incorrect prop ${propName} supplied to ${componentName}. Validation failed.`
      );
    }
  },
};
