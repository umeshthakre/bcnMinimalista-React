import React from "react";
import ReactDOM from "react-dom";
import './ModalReduce.css';
// import { Modal, ModalHeader, ModalBody, Label, Button } from "reactstrap";
// import { Control, LocalForm } from "react-redux-form";



const ModalReduce = ({children}) => {
  const content = (
    <div className="modal">
      <header className="modal_header">
        <h2 className="modal-header__title">modal title</h2>
      </header>''
{children}
      <form></form>
      <footer className="modal_footer">modal footer</footer>
    </div>
  )

  return ReactDOM.createPortal(content, document.getElementById("modal-root"));
};

export default ModalReduce;
