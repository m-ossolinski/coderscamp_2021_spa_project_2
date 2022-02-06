import React from "react";

import { Button } from "../Button/Button";
import Modal from "../Modal";
import { useModal } from "../../services/hooks/useModal";

export const TransactionEdit = ({ id }) => {
  const { isVisible, toggleVisibility } = useModal();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Button secondary onClick={() => toggleVisibility()}>
        Edit
      </Button>
      <Modal
        isVisible={isVisible}
        onCancel={() => {
          toggleVisibility();
        }}
        modalHeader={"Edit transaction"}
        cancelBtnLabel={"Cancel"}
        submitBtnLabel={"Submit"}
        onSubmit={handleSubmit}
      >
        <p></p>
      </Modal>
    </>
  );
};
