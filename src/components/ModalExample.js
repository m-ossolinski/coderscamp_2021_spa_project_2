import React from "react";
import Modal from "./Modal";
import { useModal } from "../services/hooks/useModal";

export const ModalExample = () => {
  const { isVisible, toggleVisibility } = useModal();
  const modalContent = [
    { title: "Modal Title" },
    { content: "Text" },
    {
      name: "Save", // if set to null this button will not be rendered
      run: function () {
        console.log("first btn clicked");
      },
    },
    {
      name: "Close",
      run: function () {
        console.log("second btn clicked");
      },
    },
  ];
  return (
    <>
      <button className="button-default" onClick={toggleVisibility}>
        Show Modal
      </button>
      <Modal
        isVisible={isVisible} //state
        toggleVisibility={toggleVisibility} //toggle hidden on close
        header={modalContent[0].title}
        content={modalContent[1].content}
        firstBtnName={modalContent[2].name} // set to null to hide button
        firstBtnFunc={modalContent[2].run}
        secondBtnName={modalContent[3].name} // set to null to hide button
        secondBtnFunc={modalContent[3].run}
      />
    </>
  );
};
