import * as Icons from "react-icons/fa";

const IconPickerItem = ({ icon }) => {
  const { [icon]: Icon } = Icons;

  return <Icon />;
};

export default IconPickerItem;
