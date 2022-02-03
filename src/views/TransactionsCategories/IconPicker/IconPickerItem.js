import * as Icons from "react-icons/fa";
import PropTypes from "prop-types";

export const IconPickerItem = ({ icon }) => {
  const { [icon]: Icon } = Icons;

  return <Icon />;
};

IconPickerItem.propTypes = {
  icon: PropTypes.string.isRequired,
};
