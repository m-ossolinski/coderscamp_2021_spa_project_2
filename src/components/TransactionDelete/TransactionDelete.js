import React from "react";

import { Button } from "../Button/Button";
import { ListButton } from "../ListButton/ListButton";
import Modal from "../Modal";
import { useModal } from "../../services/hooks/useModal";

import removeTransaction from "../../services/api/transactionsService.";

export const TransactionDelete = ({ id }) => {
  const { isVisible, toggleVisibility } = useModal();

  return (
    <>
      <ListButton secondary onClick={() => toggleVisibility()}>
        Delete
      </ListButton>
      <Modal
        isVisible={isVisible}
        onCancel={() => {
          toggleVisibility();
        }}
        modalHeader={"Delete transaction"}
        cancelBtnLabel={"Cancel"}
        submitBtnLabel={"Delete"}
        onSubmit={() => {
          removeTransaction.removeTransaction(id);
          toggleVisibility();
          window.location.reload(false);
        }}
      >
        <p>Are you sure you want delete this transaction?</p>
      </Modal>
    </>
  );
};
