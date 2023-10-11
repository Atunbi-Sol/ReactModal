import React from "react";
import ReactDOM from "react-dom";
import { GrFormClose } from "react-icons/gr";


const Modal = ({ open, children, onClose }) => {
  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <div className="overlayStyle" onClick={onClose} />
      <div className="modalStyle">
        <button onClick={onClose} className="modalClose">
          <GrFormClose className="closeButton" />
        </button>
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
