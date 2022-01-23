import React from "react";
import ReactDOM from "react-dom";
import { StyledModal } from "./Modal.styled";
import PropTypes from "prop-types";

const Modal = ({
  isVisible,
  toggleVisibility,
  modalHeader,
  cancelBtnLabel,
  submitBtnLabel,
  onSubmit,
  children,
}) => {
  const onCancel = () => {
    toggleVisibility();
  };
  return isVisible
    ? ReactDOM.createPortal(
        <StyledModal>
          <div className="modal-overlay" />
          <div className="modal-wrapper">
            <div className="modal">
              <div className="modal-header">
                <h3>{modalHeader ?? "Edit transaction"}</h3>
                <button className="modal-btn-close" onClick={toggleVisibility}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {children ? <div>{children}</div> : null}
              </div>
              <div className="button-wrapper">
                <button onClick={onCancel}>{cancelBtnLabel ?? "Cancel"}</button>
                <button onClick={onSubmit}>{submitBtnLabel ?? "Submit"}</button>
              </div>
            </div>
          </div>
        </StyledModal>,
        document.body
      )
    : null;
};

Modal.propTypes = {
  children: PropTypes.node,
  modalHeader: PropTypes.string,
  cancelBtnLabel: PropTypes.string,
  submitBtnLabel: PropTypes.string,
  onSubmit: PropTypes.func,
};

export default Modal;
