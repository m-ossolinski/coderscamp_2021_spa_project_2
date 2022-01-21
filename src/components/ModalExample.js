import React from "react";
import Modal from "./Modal";
import useModal from "../services/hooks/useModal";

export default function ModalExample() {
  const { isShowing, toggle } = useModal();
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
    {
      name: "Info",
      run: function () {
        console.log("third btn clicked");
      },
    },
  ];
  return (
    <>
      <button className="button-default" onClick={toggle}>
        Show Modal
      </button>
      <Modal
        isShowing={isShowing} //state
        hide={toggle} //toggle hidden on close
        header={modalContent[0].title}
        content={modalContent[1].content}
        firstBtnName={modalContent[2].name} // set to null to hide button
        firstBtnFunc={modalContent[2].run}
        secondBtnName={modalContent[3].name} // set to null to hide button
        secondBtnFunc={modalContent[3].run}
        thirdBtnName={modalContent[4].name}
        thridNtnFunc={modalContent[4].run} // set to null to hide button
      />
    </>
  );
}
