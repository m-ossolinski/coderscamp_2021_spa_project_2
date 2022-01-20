import React from "react";
import ReactDOM from "react-dom";
import { StyledModal } from "./Modal.styled";

const Modal = ({ isShowing, hide, header, content }) =>
  isShowing
    ? ReactDOM.createPortal(
        <StyledModal>
          <div className="modal-overlay" />
          <div className="modal-wrapper">
            <div className="modal">
              <div className="modal-header">
                <h3>{header}</h3>
                <button onClick={hide}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <p>{content}</p>
            </div>
          </div>
        </StyledModal>,
        document.body
      )
    : null;

export default Modal;
