import React from "react";
import Modal from "./components/Modal";
import useModal from "./services/hooks/useModal";

export default function ModalExample() {
  return (
    <>
      <button className="button-default" onClick={toggle}>
        Show Modal
      </button>
      <Modal
        isShowing={isShowing}
        hide={toggle}
        header={"Judy is awesome"}
        content={"Some text here"}
      />
    </>
  );
}
