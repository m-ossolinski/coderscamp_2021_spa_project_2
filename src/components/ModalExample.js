import React from "react";
import Modal from "./Modal";
import { useModal } from "../services/hooks/useModal";

export const ModalExample = () => {
  const { isVisible, toggleVisibility } = useModal();

  return (
    <>
      <button className="button-default" onClick={toggleVisibility}>
        Show Modal
      </button>
      <Modal
        isVisible={isVisible}
        toggleVisibility={toggleVisibility}
        modalHeader={"Edit transaction"}
        cancelBtnLabel={"Cancel editting"}
        submitBtnLabel={"Submit changes"}
        onSubmit={() => {
          console.log("here");
        }}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et recusandae
          vero aliquid consequatur atque delectus excepturi nostrum minus
          quisquam omnis, dolore odio explicabo unde, laborum exercitationem
          ipsam consectetur natus molestias.
        </p>
      </Modal>
    </>
  );
};
