import React from "react";
import ReactDom from "react-dom";
import "./index.css";

function Modal({ isModal, onModalClose, children }) {
  if (!isModal) return null;
  return ReactDom.createPortal(
    <>
      <div className="modal-overlay"></div>
      <div className="modal-popup">
        <button className="modal-btn-close" onClick={onModalClose}>
          Close
        </button>
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default Modal;
