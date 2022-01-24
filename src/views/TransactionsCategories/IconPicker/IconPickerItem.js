import * as Icons from "react-icons/fa";

export const IconPickerItem = ({ icon }) => {
  const { [icon]: Icon } = Icons;

  return <Icon />;
};
