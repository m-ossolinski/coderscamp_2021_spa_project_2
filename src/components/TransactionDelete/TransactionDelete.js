import React from "react";

import Modal from "../Modal";
import { useModal } from "../../services/hooks/useModal";

import { FaTrashAlt } from "react-icons/fa";
import {
  Confirmation,
  IconWrapper,
} from "../../pages/TransactionsCategories/RemoveCategory/RemoveCategory.styled";

import removeTransaction from "../../services/api/transactionsService.";

export const TransactionDelete = ({ id }) => {
  const { isVisible, toggleVisibility } = useModal();

  return (
    <>
      <IconWrapper onClick={toggleVisibility}>
        <FaTrashAlt />
      </IconWrapper>
      <Modal
        isVisible={isVisible}
        onCancel={() => {
          toggleVisibility();
        }}
        modalHeader={"Delete transaction"}
        cancelBtnLabel={"Cancel"}
        submitBtnLabel={"Delete"}
        onSubmit={() => {
          // removeTransaction.removeTransaction(id);
          // toggleVisibility();
          // window.location.reload(false);
        }}
      >
        <Confirmation>Are you sure to delete this transaction?</Confirmation>
      </Modal>
    </>
  );
};
