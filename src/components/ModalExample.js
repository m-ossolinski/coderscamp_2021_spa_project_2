import React from "react";
import Modal from "./Modal";
import { useModal } from "../services/hooks/useModal";

export const ModalExample = () => {
  const { isVisible, toggleVisibility } = useModal();
  // required hook for toggling visbility state

  return (
    <>
      <button className="button-default" onClick={toggleVisibility}>
        Show Modal
      </button>
      {/* SAMPLE BUtTON TOGGLING MODA ON WITH onClick */}

      <Modal
        isVisible={isVisible}
        onCanel={toggleVisibility}
        modalHeader={"Edit transaction"}
        cancelBtnLabel={"Cancel editting"}
        submitBtnLabel={"Submit changes"}
        onSubmit={() => {
          console.log("here");
        }}
      >
        {/* BELOW: children - a content being passed on to display in moda */}
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
