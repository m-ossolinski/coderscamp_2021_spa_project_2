import React from "react";

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
