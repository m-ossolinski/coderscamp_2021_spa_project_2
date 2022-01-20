import React from "react";
import IconPickerItem from "./IconPickerItem";
import { iconList } from "../../../assets/iconList";

const IconPicker = ({ handleSelectIcon }) => {
  console.log(iconList);
  return (
    <div>
      {iconList.map((icon) => (
        <button key={icon} onClick={handleSelectIcon} value={icon}>
          <IconPickerItem icon={icon} />
        </button>
      ))}
    </div>
  );
};

export default IconPicker;
