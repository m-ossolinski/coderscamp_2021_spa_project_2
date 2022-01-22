import React from "react";
import ReactDOM from "react-dom";
import { StyledModal } from "./Modal.styled";

const Modal = ({
  isVisible,
  toggleVisibility,
  header,
  content,
  firstBtnName,
  firstBtnFunc,
  secondBtnName,
  secondBtnFunc,
}) =>
  isVisible
    ? ReactDOM.createPortal(
        <StyledModal>
          <div className="modal-overlay" />
          <div className="modal-wrapper">
            <div className="modal">
              <div className="modal-header">
                {header ? <h3>{header}</h3> : "No modal title provided"}
                <button className="modal-btn-close" onClick={toggleVisibility}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {content ? <div>{content}</div> : "No modal title provided"}
              </div>
              <div className="button-wrapper">
                {firstBtnName ? (
                  <button onClick={firstBtnFunc}>{firstBtnName}</button>
                ) : null}
                {secondBtnName ? (
                  <button onClick={secondBtnFunc}>{secondBtnName}</button>
                ) : null}
              </div>
            </div>
          </div>
        </StyledModal>,
        document.body
      )
    : null;

export default Modal;
