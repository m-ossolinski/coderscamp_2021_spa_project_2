import PropTypes from "prop-types";
import {
  Tiny,
  ExtraSmall,
  Small,
  Medium,
  Big,
  Large,
  ExtraLarge,
} from "./Typography.styled";

const fontSizeMapping = {
  tiny: Tiny,
  extraSmall: ExtraSmall,
  small: Small,
  medium: Medium,
  big: Big,
  large: Large,
  extraLarge: ExtraLarge,
};

export const Typography = ({ tag, size, className, children }) => {
  const Component = fontSizeMapping[size].withComponent(tag);

  return <Component className={className}>{children}</Component>;
};

Typography.propTypes = {
  tag: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
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
