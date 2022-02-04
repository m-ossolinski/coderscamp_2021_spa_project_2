import React from "react";
import ReactDOM from "react-dom";
import { StyledModal } from "./Modal.styled";
import PropTypes from "prop-types";
import { Button } from "./Button/Button";

const Modal = ({
  isVisible,
  onCancel,
  modalHeader,
  cancelBtnLabel,
  submitBtnLabel,
  onSubmit,
  children,
}) => {
  return isVisible
    ? ReactDOM.createPortal(
        <StyledModal>
          <div className="modal-overlay" />
          <div className="modal-wrapper">
            <div className="modal">
              <div className="modal-header">
                <h3>{modalHeader ?? "Edit transaction"}</h3>
                <button className="modal-btn-close" onClick={onCancel}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {children ? <div>{children}</div> : null}
              </div>
              <div className="button-wrapper">
                <Button secondary onClick={() => onCancel()}>
                  {cancelBtnLabel ?? "Cancel"}
                </Button>
                <Button primary onClick={() => onSubmit()}>
                  {submitBtnLabel ?? "Submit"}
                </Button>
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
