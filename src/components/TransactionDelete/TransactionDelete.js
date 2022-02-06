import React from "react";

import { Button } from "../Button/Button";
import Modal from "../Modal";
import { useModal } from "../../services/hooks/useModal";

export const TransactionDelete = ({ id }) => {
  const { isVisible, toggleVisibility } = useModal();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Button secondary onClick={() => toggleVisibility()}>
        Delete
      </Button>
      <Modal
        isVisible={isVisible}
        onCancel={() => {
          toggleVisibility();
        }}
        modalHeader={"Delete transaction"}
        cancelBtnLabel={"Cancel"}
        submitBtnLabel={"Submit"}
        onSubmit={handleSubmit}
      >
        <p>Are you sure you want delete this transaction?</p>
      </Modal>
    </>
  );
};
