import React from 'react';

function Modal({ setShow, children }) {
  return (
    <div className="modal">
      <div className="close-button" onClick={() => setShow(false)}>
        X
      </div>
      {children}
    </div>
  );
}

export default Modal;
